/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any 
 * JavaScript running in the front-end, then you should delete this file and remove 
 * the `viewScript` property from `block.json`. 
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

const incomeGuidelines2023 = {
    brackets: [25142, 33874, 42606, 51338, 60070, 68802, 77534, 86266],
    additional: 8732,
}

function init(container) {
  function isIncomeEligible(income, householdSize) {
    const guidelines = incomeGuidelines2023
    let incomeLimit
    console.log(income, householdSize)
    if(householdSize <= guidelines.brackets.length) {
      incomeLimit = guidelines.brackets[householdSize-1]
    } else {
      const extraPeople = householdSize - guidelines.brackets.length
      incomeLimit = guidelines.brackets[guidelines.brackets.length-1] + (extraPeople * guidelines.additional)
    }
    return income <= incomeLimit
  }

  function hideAllSteps() {
    for (const step of container.querySelectorAll('[data-step]')) {
      step.style.display = 'none'
    }
  }

  function initStep(step) {
    hideAllSteps()
    const stepEl = container.querySelector(`[data-step="${step}"]`)
    if(!stepEl) {
      initStep('error')
      return
    }
    stepEl.style.display = ''
    const startOverButton = stepEl.querySelector('[data-action="start-over"]')
    const yesButton = stepEl.querySelector('[value="yes"]')
    const noButton = stepEl.querySelector('[value="no"]')
    if(startOverButton) {
      startOverButton.onclick = () => initStep('intro')
    }
    switch(step) {
      case 'intro':
        stepEl.querySelector('button').onclick = () => initStep('dcfs-1')
        break
      case 'dcfs-1':
        yesButton.onclick = () => initStep('dcfs-qualify')
        noButton.onclick = () => initStep('foster')
        break
      case 'dcfs-2':
        yesButton.onclick = () => initStep('foster')
        noButton.onclick = () => initStep('dcfs-qualify')
        break
      case 'dcfs-qualify':
        stepEl.querySelector('button').onclick = () => initStep('foster')
        break
      case 'foster':
        yesButton.onclick = () => initStep('final-qualify')
        noButton.onclick = () => initStep('program')
        break
      case 'program':
        yesButton.onclick = () => initStep('final-qualify')
        noButton.onclick = () => initStep('income')
        break
      case 'income':
        stepEl.querySelector('form').onsubmit = (e) => {
          e.preventDefault()
          const valid = e.target.reportValidity()
          if(!valid) {
            stepEl.querySelector('.error').style.display = ''
          } else {
            const income = parseInt(stepEl.querySelector('[name="income"]').value)
            const householdSize = parseInt(stepEl.querySelector('[name="household-size"]').value)
            if(isIncomeEligible(income, householdSize)) {
              initStep('final-qualify')
            } else {
              initStep('final-no-qualify')
            }
          }
        }
        break

    }
  }

  initStep('intro')
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.wp-block-unicamp-cost-calculator').forEach(el => init(el))
})
