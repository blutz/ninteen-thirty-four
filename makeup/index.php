<?php

$year = '2026';
function csv_to_json($csv_str) {
  $rows = array_map(fn($line) => str_getcsv($line, ",", '"', "\\"), explode("\n", trim($csv_str)));
  $headers = array_shift($rows);

  $json = array_map(fn($row) => array_combine($headers, $row), $rows);
  return json_encode($json);
}
$questions_raw = file_get_contents("https://docs.google.com/spreadsheets/d/10JzWFKrYvCJb4iActUmtfYG05fowog4M03vz_8TFhhc/export?format=csv&gid=0");
$questions_json = csv_to_json($questions_raw);

?>
<!doctype html>
<html>
<head>
  <link href="https://unpkg.com/survey-core/survey-core.min.css" type="text/css" rel="stylesheet">
  <title>Training Make-Up Form <?php echo $year; ?> | UCLA UniCamp</title>
  <script type="text/javascript" src="https://unpkg.com/survey-core/survey.core.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/survey-js-ui/survey-js-ui.min.js"></script>
  <style type='text/css'>
    :root { --primary: #2774ae; }
    body { margin: 0; height: 100vh; }
    #surveyContainer { height: 100%; }
  </style>
</head>
<body>
<div id='surveyContainer'></div>
<script>

const questions = <?php echo $questions_json; ?>

console.log(questions)
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
    const topicQuestions = weekQuestions.filter(q => q.Topic.trim() === topic)
    topicQuestions.forEach((q, j) => {
      const newQuestion = page.addNewQuestion('text', `question-${i}-${j}`)
      newQuestion.title = q.Question
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

survey.onComplete.add((sender) => {
  // TODO: do something with survey data
  console.log("Results:", sender.data)
  alert("Thank you for completing the quiz!")
})
</script>
</body>
</html>
