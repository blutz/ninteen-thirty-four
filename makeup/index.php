<?php
$google_script_url = 'https://script.google.com/macros/s/AKfycbxegw6d7Hn3_aLf6mHY07SGlmL3nTdmsFxsq6eJ_ORL78c6sfDJ0GNoStWdx44TybSP/exec';
$year = '2026';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $json_data = file_get_contents('php://input');

  $ch = curl_init($google_script_url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

  $response = curl_exec($ch);
  curl_close($ch);

  header('Content-Type: application/json');
  echo $response;
  exit;
}

function csv_to_json($csv_str) {
  $stream = fopen('php://memory', 'r+');
  fwrite($stream, trim($csv_str));
  rewind($stream);

  $headers = fgetcsv($stream, 0, ",", '"', "");
  $json = [];

  while (($row = fgetcsv($stream, 0, ",", '"', "")) !== false) {
    if (count($headers) === count($row)) {
      $json[] = array_combine($headers, $row);
    }
  }

  fclose($stream);
  return json_encode($json, JSON_PRETTY_PRINT);
}
$questions_raw = file_get_contents('https://docs.google.com/spreadsheets/d/10JzWFKrYvCJb4iActUmtfYG05fowog4M03vz_8TFhhc/export?format=csv&gid=0');
$meetings_raw = file_get_contents('https://docs.google.com/spreadsheets/d/10JzWFKrYvCJb4iActUmtfYG05fowog4M03vz_8TFhhc/export?format=csv&gid=382462573');
$questions_json = csv_to_json($questions_raw);
$meetings_json = csv_to_json($meetings_raw);

?>
<!doctype html>
<html>
<head>
  <link href="https://unpkg.com/survey-core/survey-core.min.css" type="text/css" rel="stylesheet">
  <title>Training Make-Up Form <?php echo $year; ?> | UCLA UniCamp</title>
  <script type="text/javascript" src="https://unpkg.com/survey-core/survey.core.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/survey-js-ui/survey-js-ui.min.js"></script>
  <script src="https://unpkg.com/marked@12.0.0/lib/marked.umd.js"></script>
  <style type='text/css'>
    :root { --primary: #2774ae; }
    body { margin: 0; height: 100vh; }
    #surveyContainer { height: 100%; }
  </style>
</head>
<body>
<div id='surveyContainer'></div>
<script>

const questions = <?php echo $questions_json; ?>;
const meetings = <?php echo $meetings_json; ?>;

questions.forEach(q => {
  const meeting = meetings.find(el => el.Topic === q.Topic)
  q.Meeting = meeting.Meeting
})

const weeksRawSet = new Set()
questions.forEach(q => weeksRawSet.add(q.Meeting))
const weeksRaw = Array.from(weeksRawSet).sort()
const weeks = weeksRaw.map(w => {
  let quarter = 'Spring'
  if(w[0].toLowerCase() === 'w') { quarter = 'Winter' }
  return {value: w, text: `${quarter} week ${w.substring(1)}`}
})

const surveyJson = {
  title: '🌲 Training Make-Up Form ⛺️',
  description: 'UCLA UniCamp • <?php echo $year; ?>',
  showProgressBar: true,
  completedHtml: '<h3>Thank you for submitting your makeup form!</h3>',
  showProgressBar: true,
  progressBarShowPageTitles: true,
  progressBarShowPageNumbers: true,
  progressBarInheritWidthFrom: "survey",
  firstPageIsStartPage: true,

  pages: [{
    elements: [{
      name: 'fullName',
      title: 'Full (Real) Name',
      type: 'text',
      isRequired: true,
    }, {
      name: 'campName',
      title: 'Camp (Woodsey) Name',
      type: 'text',
      isRequired: true,
    }, {
      name: 'session',
      title: 'Session',
      type: 'radiogroup',
      showOtherItem: true,
      isRequired: true,
      colCount: 2,
      choices: [
        'Session 1',
        'Session 2',
        'Session 3',
        'Session 4',
        'Session 5',
        'Session 6',
        'Session 7',
        //'CVP',
        //'ATL',
      ]
    }, {
      name: 'meeting',
      title: "Meeting you're making up",
      type: 'dropdown',
      choices: weeks,
      isRequired: true,
    }],
  }, {
    title: 'Submit',
    elements: [{
      name: 'reason',
      type: 'text',
      title: "Why did you need to make up this meeting?",
      isRequired: true,
      description: "E.g. class conflict, family emergency, ...",
    }, {
      name: 'questions',
      rows: 5,
      autoGrow: true,
      title: "Do you have any questions/comments about this week's training?",
      type: 'comment',
    }]
  }],
}
const survey = new Survey.Model(surveyJson)

// Markdown config
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) { return `<a href="${href}" target='_blank'>${text}</a>` }
survey.onTextMarkdown.add((sender, options) => {
  options.html = marked.parseInline(options.text, {renderer})
})
survey.onStarted.add((sender, options) => {
  const meeting = survey.getValue('meeting').toLowerCase().trim()
  const weekQuestions = questions.filter(q => q.Meeting.toLowerCase().trim() === meeting)
  const weekTopics = []
  weekQuestions.forEach(q => {
    // Preserve order while we're doing this
    const t = q.Topic.trim()
    if(!weekTopics.includes(t)) { weekTopics.push(t) }
  })
  weekTopics.forEach((topic, i) => {
    const page = survey.addNewPage('topic-'+i, survey.pages.length-1)
    page.title = topic
    const topicObj = meetings.find(el => el.Topic === topic)
    if(topicObj['Textbook URL']) {
      page.description = `[Click here to read the textbook page for this topic](${topicObj['Textbook URL']}) (opens in new tab)\nPassword is **1934**`
    }
    const topicQuestions = weekQuestions.filter(q => q.Topic.trim() === topic)
    topicQuestions.forEach((q, j) => {
      const newQuestion = page.addNewQuestion('comment', `question-${i}-${j}`)
      newQuestion.title = q.Question
      newQuestion.isRequired = true
    })
  })
})
document.addEventListener("DOMContentLoaded", function() {
  survey.render(document.getElementById("surveyContainer"))
})
window.addEventListener("beforeunload", (event) => {
  if (survey.state === 'running' && Object.keys(survey.data).length) {
    event.preventDefault()
    event.returnValue = '' // Required for Chrome
  }
})
survey.onComplete.add(() => {
  window.removeEventListener("beforeunload", () => {})
})

survey.onComplete.add((sender, options) => {
  options.showSaveInProgress('Saving, please wait.')
  const questions = survey.getAllQuestions().map(q => ({name: q.name, title: q.title || q.name }))
  const dataStr = JSON.stringify({data: survey.data, questions})
  const headers = new Headers({ "Content-Type": "application/json; charset=utf-8" })
  fetch('', {
    method: "POST",
    body: dataStr,
    headers: headers
  }).then(response => {
    if (!response.ok) {
      throw new Error("Could not post the survey results")
    }
    return response.json()
  }).then(respJSON => {
    if(respJSON.result !== 'success') {
      throw new Error("Could not post the survey results")
    }
    options.showSaveSuccess('Make-up form submitted!')
    // options.clearSaveMessages();
  }).catch(error => {
    options.showSaveError('Erorr submitting make-up form. Try again or reach out to Blitzen at 310-730-9015.')
    console.log(error)
  });
})
</script>
</body>
</html>
<?php /* code.gs in AppScript

const SHEET_ID = '910047839'

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetById(SHEET_ID)
  const req = JSON.parse(e.postData.contents)
  const questionTitles = {}
  req.questions.forEach(q => {
    questionTitles[q.name] = q.title
  })
  const {fullName, campName, session, 'session-Comment': sessionComment, meeting, ...questions} = req.data
  const questionsRows = Object.keys(questions).map(qId => {
    return `${questionTitles[qId] || qId}\n========\n${questions[qId]}`
  })
  sheet.appendRow([
    null,
    new Date(),
    fullName,
    campName,
    sessionComment ? 'Other: ' + sessionComment : session,
    meeting,
    ...questionsRows,
  ])
  return ContentService
    .createTextOutput(JSON.stringify({result: 'success'}))
    .setMimeType(ContentService.MimeType.JSON)
}
*/ ?>
