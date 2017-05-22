# News On Demand

[![Build Status](https://travis-ci.org/itunuworks/news-feed-application.svg?branch=developmentBranch)](https://travis-ci.org/itunuworks/news-feed-application)
[![Coverage Status](https://coveralls.io/repos/github/itunuworks/news-feed-application/badge.svg?branch=setupTestsBranch)](https://coveralls.io/github/itunuworks/news-feed-application?branch=setupTestsBranch)

## Introduction

- **`News on Demand `** is a web app for providing on the spot headline access to users from multiple news sources all in one website.
- It has the following features;
  - Sign In with a Google Account.
  - View news headlines from multiple news service providers at a click.
  - Sort news by **top**, **latest** and **Popular**
  - Invite peers to view news article **by email**.
  - Create custom lists and save articles to them.
  - Delete saved articles and lists.
- Click **[here](https://news-feed-application.herokuapp.com/#/home)** to access the app on Heroku

## Dependencies

- This app is a front-end react web app having multiple front-end dependencies and served using Express.

### Back End Dependencies

- This app relies mostly on the javascript framework.
  - **[Express](https://expressjs.com/)** - This is used to serve the app.

### Front End Dependencies

- **[SemanticUI](https://semantic-ui.com/)** - Most of the UI is built using Semantic framework, API and Components.
- **[Firebase](https://firebase.google.com/)** - This is used to handle the real-time database features of the app and the user login and authentication.
- **[EmailJS](https://www.emailjs.com/)** - This is the API used to implement the email invite feature. It helps auto-generate and deliver the invitation email.
- **[Flux](https://facebook.github.io/flux/)** - This is the React architecture used in the app framework design.
- **[BabelJS](https://babeljs.io/)** - This is used to transpile code converting ES6 code to browser compatible code.
- **[Webpack](https://webpack.github.io/)** - This is the default module bundler.
## Installation and setup

- Navigate to a directory of choice on `terminal`.

- Clone [this](https://github.com/itunuworks/bc-18-ideabox.git) repository on that directory.

  - Using SSH;

    > `git clone git@github.com:itunuworks/news-feed-application.git`

  - Using HTTP;

    > `git clone https://github.com/itunuworks/news-feed-application`

- Navigate to the repo's folder on your computer

  - `cd news-feed-application/`

- Be sure to install all the dependencies using the command

- `npm install`

> To use the **git** and **npm** command, You also need to have **node** and **git** installed on your system.

- Run the app
  - `npm run dev` to start the server.
  - Running the command above will produce output that's similar to the sample below.
    `Listening for connections to port 8080`
  - Now open your browser and navigate to `localhost:8080/home`

## Tests
JEST by Facebook was used to test the following parts of the code.
- dispatcher.js
- newsActions.js
- firebaseApi.js
- newsAPI.js
- newsStore.js