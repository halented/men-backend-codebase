---
title: 3/4 MERN: Creating a Node.js, Express, & MongoDB Backend From Scratch
published: false
description: This post is what you think it is
tags: nosql, MERN, node, express, mongodb, backend
//cover_image: https://direct_url_to_image.jpg
---

I've been a big fan of React for a while, but that part of the MERN stack isn't involved in this post. If anyone does have a specific question about how to the backend we are about to build up with a React frontend, please leave a comment and I would be happy to make a new post with that information as well.

Since this is focused on MERN without the R, the acronym we'll use for this post is MEN. Why not. Finally, MEN will be useful! 😄

Here's the overview of the steps we're covering in this post: 

1. Initializing a folder with a package manager
2. Adding necessary dependencies (and discussing the purposes of each)
3. Establishing a connection to MongoDB through [Atlas](https://www.mongodb.com/cloud/atlas)
4. Establishing an Express application & selecting the local port on which to run it
5. Creating A Model
6. Creating CRUD routes for that model
7. Testing your code out with an API tester like Postman or Insomnia

It should be a good time. This post will assume that you have a medium level of JavaScript/programming capabilities -- that is, if you are just starting out with learning JS, this post might knock you on your ass, so bookmark it for later and revisit when you're pretty good with the basics. This post also assumes you have NodeJs installed on your computer already. You can check if you do by running the command `node -v` in your terminal. If it does not spit out a version for you, please install Node from [HERE](https://nodejs.org/en/) before beginning this walkthrough. 

Other than that, if you're ready to go then let's go!

## Initializing a folder with a package manager

This part is pretty straightforward. 
- From your terminal, navigate to whatever directory you want this project to live in
- Make a new folder with `mkdir MEN-backend`
- `cd` into that folder
- Enter the command `yarn init` or `npm init`, depending on which package manager you want to use. 

The differences between yarn and npm are negligable for our circumstances, but I use yarn because the word's cute. Once you've done that, your terminal will ask you a series of questions -- you can just slam on the enter key a bunch of times to stick with the defaults, or you can change the versioning/name/licensing info at your discretion. These details will not affect the project.

Once that's complete, you'll notice a package.json file appear inside your MEN-backend directory. This is where your project will keep track of necessary dependencies and libraries that we'll be installing, like Express.

One that note, let's get to installing.

## Adding necessary dependencies 

One important tip for this section: the words *dependency*, *library*, and *package* are going to be used pretty much interchangably. I'm just using these phrases to reference any outside code base that we'll be making use of in our project. 

The first thing add is [Express](http://expressjs.com/), of course. Very necessary for MEN. Adding packages to your established `package.json` file is pretty easy; from inside of our backend directory you can run the command `yarn add express` and watch as your terminal does the work of adding it. Once it's done, you will notice that a new folder, `node_modules` has appeared in our directory, as well as a file called `yarn.lock`. 

These two items help your project keep track of not only the libraries that you want to use in your project, but any libraries that those libraries are using. Do not edit these items directly. If something goes wonky with your yarn lock or node modules, just delete both of them and run `yarn install` to have 'em regenerate. 

Here are the other packages you should install. With each you can just run `yarn add <package name>` to add it to your package.lock file: 

- [cors](https://www.npmjs.com/package/cors)
    - CORS stands for "cross-origin resource sharing" and the package allows you to configure which domains are trusted and which ones are not. We will be making requests to our backend from a separate origin (that's where insomnia or postman will come into play), so we need to install CORS to allow us to do that. 

- [dotenv](https://www.npmjs.com/package/dotenv) 
    - We are going to need a sort of secret key to access our MongoDB on the Atlas website. If you plan on uploading your project to Github or some other code sharing site, you *shouldn't* upload your secret key as well. Best practices dictate that you should keep that kind of information in a local environment variable. The dotenv package will allow us to add a file called `.env` to our project, put our secret key in there, and load it into other files where necessary. The library will configure environment variables to your [process.env](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7?gi=ce14aad160a0) object, which makes it global for your project. We'll also avoid pushing the `.env` to Github by adding it to a `.gitignore` file. 

- [mongoose](https://mongoosejs.com/docs/index.html)
    - Mongoose allows us to: map the model attributes and requirements to the database, create new collections and documents in our database, and make queries to retrieve info from the database.

- [nodemon](https://nodemon.io/)
    - We will use nodemon to actually serve the backend routes locally on whatever port we choose. If we were to choose port 5000, say, we can run nodemon to have our app served on http://localhost:5000/

## Establishing a connection to MongoDB# men-backend-codebase
