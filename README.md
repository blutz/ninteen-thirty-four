# Ninteen Thirty-Four

**UniCamp's new WordPress theme**

## Getting started
This theme works entirely by itself -- all generated files are committed with it so it can be run on a lightweight server with almost no special deploy commands.

To develop on this, follow these steps:

### 1. Install Node.js
Bower, Gulp, and some gulp pluguins require Node.js to run (and can be installed via the Node package manager, `npm`). [Install Node.js from its official website.](https://nodejs.org/)

### 2. Install Bower
[Bower](http://bower.io/) is used to install and upagrade vendor HTML/CSS/JS. You only need to install bower if you want to interact with the `assets/vendors` folder. If you are not adding or upgrading dependencies, there is no need for it. Install it globally with npm:

    npm install -g bower

Then have Bower install its dependencies:

    bower install

These dependencies are not kept in this repo because they're not needed right now. Instead, the result of concatenating the dependencies is stored in this repo.

### 3. Install Gulp
[Gulp](http://gulpjs.com/) is a workflow automation tool. It is used to process various assets. You need to install it globally to get access to it on the command line:

    npm install -g gulp

### 4. Install other npm requirements
Gulp and Bower are the only two things that need to be installed globally (and only because we want to be able to use them directly on the command line). To install the rest of the gulp plugins, have npm install everything from `package.json`:

    npm install

### 5. Run Gulp
Run gulp in your terminal:

    gulp

This will automatically build and watch all needed files. If you need to run an individual task without starting the watching service, inspect `gulpfile.js` for the command names.

## Notes
* Do *not* edit style.css directly. The comments at the top are used by WordPress to recognize this as a valid theme but they are generated from `assets/stylesheets/style.scss`.
