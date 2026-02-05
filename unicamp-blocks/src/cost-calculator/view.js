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

// https://www.fns.usda.gov/schoolmeals/income-eligibility-guidelines

// https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/income-limits-2025.pdf
// https://www.federalregister.gov/documents/2025/03/13/2025-03821/child-nutrition-programs-income-eligibility-guidelines#p-15
const INCOME_GUIDELINES_2026 = {
  // "Very Low Income" (highest of either SFSP or HCD)
  low: {
    brackets: [53000, 60600, 68150, 75750, 81800, 87850, 93900, 100178],
    additional: 10175, // SFSP number
  },
  // 1.25 x "Moderate Income"
  medium: {
    brackets: [111937, 127875, 143875, 159875, 172687, 185437, 198250, 211062],
    additional: 12790, // 8% of the 4-person limit
  },
}

// https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/income-limits-2024.pdf
const INCOME_GUIDELINES_2025 = {
  // "Very Low Income" (highest of either SFSP or HCD)
  low: {
    brackets: [48550, 55450, 62400, 69350, 74900, 80450, 87579, 97532],
    additional: 9953, // SFSP number
  },
  // 1.25 x "Moderate Income"
  medium: {
    brackets: [103120, 117870, 132560, 147310, 159120, 170870, 182680, 194430],
    additional: 11784, // 8% of the 4-person limit
  },
}

const CURRENT_INCOME_GUIDELINES = INCOME_GUIDELINES_2026

function init(container) {
  function isEligibleForBracket(guidelines, income, householdSize) {
    let incomeLimit
    if(householdSize <= guidelines.brackets.length) {
      incomeLimit = guidelines.brackets[householdSize-1]
    } else {
      const extraPeople = householdSize - guidelines.brackets.length
      incomeLimit = guidelines.brackets[guidelines.brackets.length-1] + (extraPeople * guidelines.additional)
    }
    return income <= incomeLimit
  }
  function getIncomeBracket(income, householdSize) {
    if(isEligibleForBracket(CURRENT_INCOME_GUIDELINES.low, income, householdSize)) {
      return INCOME_BRACKETS.LOW
    }
    if(isEligibleForBracket(CURRENT_INCOME_GUIDELINES.medium, income, householdSize)) {
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
