var $ = jQuery

// Only execute the rest of this file if we're on the right page
var unicampPage = $('meta[name="unicamp-page"]').attr('value')
if (unicampPage != 'camper-application') return

// Session info consts
// Note: this is not actual security
var SESSION_INFO = {
  'session3': {
    'title': 'Session 3: Community Building/Activism',
    'subtitle': 'The Village Nation',
    'formId': '1y_SKQ5A592-1PEa8f61GXdjEXj8CG_RU9BB74yyNqr4'
  },
  'session6-chla': {
    'title': 'Session 6: Healthy Lifestyles',
    'subtitle': "Children's Hospital Los Angeles",
    'formId': '1uMB3YMnie2Pt3QibExqsN-SY1xqc3saJrR5cafvLBhQ',
    'formOption': 'entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1424045282&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437&entry.1451578299=From+an+event+at+CHLA+or+a+CHLA-related+program'
  },
  'session6-open': {
    'title': 'Session 6: Healthy Lifestyles',
    'subtitle': "Children's Hospital Los Angeles",
    'formId': '1uMB3YMnie2Pt3QibExqsN-SY1xqc3saJrR5cafvLBhQ',
    'formOption': 'entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1424045282&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437&entry.1451578299=From+the+UniCamp+website,+and+emailed+for+an+access+code'
  },
  'session5': {
    'title': 'Session 5: Leadership Development for Urban Youth',
    'subtitle': 'Determined To Succeed, HYPE LA, and Dana Middle School',
    'formId': '1AYFH-5TWtPI3UQKPMFdrde78M2PooXKvLCzZjkYgRXc',
    'formOption': 'entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1811315605=Session+5+(Leadership+Development+for+Urban+Youth+/+July+24+-+July+31)&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437'
  },
  'session7': {
    'title': 'Session 7: Empowerment Through Art',
    'formId': '1AYFH-5TWtPI3UQKPMFdrde78M2PooXKvLCzZjkYgRXc',
    'formOption': 'entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1811315605=Session+7+(Empowerment+Through+Art+/+August+6+-+August+12)&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437'
  },
  'ocp': {
    'title': 'Older Camper Programs',
    'subtitle': 'CLIMB, UniCorps, and WALL',
    'formId': '1_sNmfTQHHfp9ZIDFgjbjD2m0tH66TG5QcLtjUc_P5wo'
  }
}
var APPLICATION_CODES = {
  'chla16': 'session6-chla',
  'healthy2016': 'session6-open',
  'health16': 'session6-open',
  'session5': 'session5',
  'session7': 'session7',
  'tvn2016': 'session3',
  'ocp': 'ocp'
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
  code = code.toLowerCase()
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
    var formUrl = 'https://docs.google.com/forms/d/' + context.sessionDetails.formId + '/viewform?embedded=true'
    if (context.sessionDetails.formOption) {
      formUrl = formUrl + '&' + context.sessionDetails.formOption
    }
    els.form[0].src = formUrl
    els.details.show()
  }
}
