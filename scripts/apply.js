var $ = jQuery

// Only execute the rest of this file if we're on the right page
var unicampPage = $('meta[name="unicamp-page"]').attr('value')
if (unicampPage != 'camper-application') return

// Session info consts
// Note: this is not actual security
var SESSION_INFO = {
  'session1': {},
  'session2': {},
  'session3': {},
  'session4': {},
  'session5': {},
  'session6': {
    'title': 'Session 6: Healthy Lifestyles',
    'subtitle': "Children's Hospital Los Angeles",
    'formUrl': 'https://docs.google.com/forms/d/17VrW_si8Z4tLyyg03iMPfZE_uNqisEg93UswjPb12iM/viewform?embedded=true'
  },
  'session7': {}
}
var APPLICATION_CODES = {
  'chla16': 'session6'
}

var els = {}
els.intro = $('#applicationIntro')
els.details = $('#applicationDetails')
els.code = $('#applicationCode')
els.codeForm = $('#applicationCodeForm')
els.codeFormError = $('#applicationCodeFormError')
els.form = $('#applicationForm')

els.codeForm.submit(function(e) {
  e.preventDefault()
  setStateFromFormSubmit()
})
function setStateFromFormSubmit(opts) {
  opts = opts || {}
  var context = {}
  var code = opts.code || els.code.val()
  context.code = code
  if (APPLICATION_CODES[code]) {
    context.activePage = 'details'
    context.sessionDetails = SESSION_INFO[APPLICATION_CODES[code]]
    $.bbq.pushState({'application-code': code})
  } else {
    context.activePage = 'intro'
    context.codeError = true
  }
  draw(context)
}

function setStateFromHash() {
  var context = {}
  var state = $.bbq.getState()
  if (state['application-code']) {
    setStateFromFormSubmit({code: state['application-code']})
  } else {
    context.activePage = 'intro'
    draw(context)
  }
}
$(window).bind('hashchange', setStateFromHash)
$(window).trigger('hashchange')


// Poor-man's templating
function draw(context) {
  // Show the right section
  els.intro.hide()
  els.details.hide()

  // Intro section
  if (context.activePage == 'intro') {
    els.intro.show()
    els.code.val(context.code)
    // Wrong code
    if (context.codeError) {
      els.code.addClass('is-invalid-input')
      els.codeFormError.show()
    } else {
      els.code.removeClass('is-invalid-input')
      els.codeFormError.hide()
    }
  }

  // Details section
  else if (context.activePage == 'details') {
    els.details.find('h2').html(context.sessionDetails.title)
    els.details.find('h4').html(context.sessionDetails.subtitle)
    els.form[0].src = context.sessionDetails.formUrl
    els.details.show()
  }
}
