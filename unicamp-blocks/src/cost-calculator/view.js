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

const INCOME_BRACKETS = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
}

// https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/income-limits-2023.pdf
const INCOME_GUIDELINES_2024 = {
  // If the family males LESS than the low amount, they qualify
  low: {
    brackets: [26500, 30300, 34100, 37850, 40900, 43950, 46950, 50560],
    additional: 3028, // 8% of the 4-person limit
  },
  // If the family makes LESS THAN OR EQUAL TO this amount them they qualify
  medium: {
    brackets: [103120,117870,132560,147310,159120,170870,182680,194430],
    additional: 11784, // 8% of the 4-person limit
  },
}

function init(container) {
  function isEligibleForBracket(guidelines, income, householdSize, lessThanOrEqual = false) {
    let incomeLimit
    if(householdSize <= guidelines.brackets.length) {
      incomeLimit = guidelines.brackets[householdSize-1]
    } else {
      const extraPeople = householdSize - guidelines.brackets.length
      incomeLimit = guidelines.brackets[guidelines.brackets.length-1] + (extraPeople * guidelines.additional)
    }
    if(lessThanOrEqual) {
      return income <= incomeLimit
    } else {
      return income < incomeLimit
    }
  }
  function getIncomeBracket(income, householdSize) {
    if(isEligibleForBracket(INCOME_GUIDELINES_2024.low, income, householdSize, false)) {
      return INCOME_BRACKETS.LOW
    }
    if(isEligibleForBracket(INCOME_GUIDELINES_2024.medium, income, householdSize, true)) {
      return INCOME_BRACKETS.MEDIUM
    }
    return INCOME_BRACKETS.HIGH
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
        yesButton.onclick = () => initStep('final-low')
        noButton.onclick = () => initStep('program')
        break
      case 'program':
        yesButton.onclick = () => initStep('final-low')
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
            const householdSizeChildren = parseInt(stepEl.querySelector('[name="household-size-children"]').value)
            const householdSizeAdults = parseInt(stepEl.querySelector('[name="household-size-adults"]').value)
            const householdSize = householdSizeChildren + householdSizeAdults
            const incomeBracket = getIncomeBracket(income, householdSize)
            switch(incomeBracket) {
              case INCOME_BRACKETS.LOW:
                initStep('final-low')
                break
              case INCOME_BRACKETS.MEDIUM:
                initStep('final-medium')
                break
              default:
                initStep('final-high')
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