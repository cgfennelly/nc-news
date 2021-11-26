
# Frontend React example news aggregation site

This project builds on the backend project [https://github.com/cgfennelly/be-nc-news/blob/main/README.md], and provides an overview for developing a CRUD application from the front end perspective.

The site contains news/story articles, which are divided into topics. Each article has user-curated ratings and can be up-voted using the API. Users can also add comments about an article.

## Getting started

Hosted build of the project: https://competent-ride-444ff7.netlify.app/


## Acknowledgements

 - Built from an example framework provided by Northcoders

## Authors

- [@chrisfennelly](https://www.github.com/cgfennelly)


## Demo

Project hosted on Netlify: https://competent-ride-444ff7.netlify.app/

Back end hosted on Heroku: https://server-example-cgf.herokuapp.com/api/
## Features

Produced using a mobile-first design strategy.

User stories include:
- view a list of all articles
- view a page for each topic with a list of related articles.
- view an individual article.
- view an individual article's comments.
- vote on an article and immediately see the change.
- post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
- sort articles by:
    - date created
    - comment_count
    - votes
- delete my own comments (as a default logged in user. e.g. 'jessjelly').

Error handling:
- see an appropriate error if I go on a non-existent path / a path for a non-existent article / topic.
- not be allowed to post a comment if I have not filled in all of the form boxes.
## Installation

- fork and clone this github repo
- project built on:
  - Node: v16.8.0

- install the following dependencies:
    - "axios": "^0.24.0",
    - "react": "^17.0.2",
    - "react-dom": "^17.0.2",
    - "react-router-dom": "^6.0.2",
    - "react-scripts": "4.0.3"

- to run in dev mode: npm start