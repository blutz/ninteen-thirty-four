<?php /* Template Name: Camper application */ ?>
<!doctype html>
<html>
<head>
  <title>UCLA UniCamp | Application</title>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,400italic,700' rel='stylesheet' type='text/css'>
  <link rel="icon" type="image/png"  href="<?php echo get_template_directory_uri(); ?>/sites/apply-assets/favicon.png">
  <meta name="viewport" content="width=device-width">
  <style>
    html {
      height: 100%;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    body {
      background-image: url('<?php echo get_template_directory_uri(); ?>/sites/apply-assets/background.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    h2 {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.2em;
      margin-top: -15px;
    }
    p {
      margin-top: 30px;
    }
    .main-content {
      color: white;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      min-width: 250px;
      text-align: center;
      max-height: 85%;
      overflow: scroll;
    }
    @media (min-height: 650px) {
      .main-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        max-height: auto;
      }
    }
    .main-content__logo {
      width: 150px;
      display: block;
      margin: auto;
    }
    .button {
      color: black;
      text-decoration: none;
      display: inline-block;
      padding: 10px 15px;
      transition: 250ms background;
      cursor: pointer;
      background-color: white;
    }
    .button:hover {
      background-color: #ddd;
    }
    .button--secondary {
      color: white;
      background-color: transparent;
      font-weight: bold;
    }
    .button--secondary:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <div class='main-content'>
    <a href='/'>
      <img class='main-content__logo' src='<?php echo get_template_directory_uri(); ?>/sites/apply-assets/logo-white.gif' alt='UCLA UniCamp' />
    </a>
    <h1>You&lsquo;re early!</h1>
    <h2>Applications open Monday, April 11</h2>
    <p>We&lsquo;re not quite ready &mdash; check back here on the 11th to start the application process.</p>
    <p>
      <a class='button button--secondary' href='/'>Learn more about UniCamp&nbsp;&rarr;</a>
    </p>
    <p>
      <a class='button' href='http://goo.gl/forms/slnz8WbsPT' target='_blank'>Sign up for an email reminder&nbsp;&rarr;</a>
    </p>
  </div>
</body>
</html>

