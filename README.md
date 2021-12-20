
# CF's Interesting News site! React project.

## Summary

Love articles about cooking and coding? This is the site for you!

This project uses the API I developed as part of another project [https://github.com/cgfennelly/be-nc-news/blob/main/README.md], providing a front-end built using React.

The site contains news/story articles, which are divided into topics. Each article can be upvoted or commented on by the users.

## Getting started

Hosted build of the project: https://competent-ride-444ff7.netlify.app/


## Features

Produced using a mobile-first design strategy.

Designed so that a user can:
- view a list of all articles
- view a page for each topic with a list of related articles.
- view an individual article.
- view an individual article's comments.
- vote on an article and immediately see the change.
- post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
- delete user's own comments (as a default logged in user. e.g. 'jessjelly').

Error handling:
- see an appropriate error if user goes to a non-existent path / a path for a non-existent article / topic.
- not be allowed to post a comment if user has not filled in all of the form boxes.


## Demo

Project hosted on Netlify: https://competent-ride-444ff7.netlify.app/

Back end hosted on Heroku: https://server-example-cgf.herokuapp.com/api/


## Cloning this project


- clone this github repo into a directory of your choice. Do this by running the following command in your terminal:

```bash
git clone https://github.com/cgfennelly/nc-news.git
```

- Open the repo folder in your IDE and run the following commands to install the dependencies and developer dependencies:

```bash
npm install
npm install --dev
```

- Once complete, you can launch the react environment with the following command:

```bash
npm start
```

- Open http://localhost:3000 to view the app in your browser


### Dependency versions
This project was developed using the following dependency versions:

- Node: v16.8.0

- dependencies:
    - "axios": "^0.24.0",
    - "react": "^17.0.2",
    - "react-dom": "^17.0.2",
    - "react-router-dom": "^6.0.2",
    - "react-scripts": "4.0.3"


## Acknowledgements

 - Built from an example framework provided by Northcoders

## Authors

- [@chrisfennelly](https://www.github.com/cgfennelly)