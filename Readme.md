Author : Dhruv Jiten Patel
Student ID : 104998232
Course: WEB322
Date: 2024/10/12

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Links for my projects

GITHUB LINK : https://github.com/djpatel63/Web322_Assignments/tree/main/assignment2

VERCEL LINK : 

Deployment Link : https://web322-assignments-jp2y.vercel.app

Domains : https://web322-assignments-jp2y-git-main-dhruv-patels-projects-5678e151.vercel.app

Source Link (main) : https://github.com/djpatel63/Web322_Assignments/tree/main

Source Link 2 : https://github.com/djpatel63/Web322_Assignments/commit/8d4d4aacd1d5834d1e157c59ce04feb590def986


// Explanation for the project

The project  is a simple web application consist of 9 files.

1. about.html (located in view folder)

The about.html file is a simple webpage with:

Bootstrap-based layout for styling and responsiveness.
A navigation bar with links to Home, About, Articles, and Categories.
An "About Me" section introducing Dhruv Patel with basic details.
A brief blog description focused on comic books.
A footer displaying copyright information for 2024.
It includes Bootstrap and jQuery for styling and functionality.

2. main.css (located in public/ css folder)

THis file includes the style for the web page. But in this project, I had added the tags of style in about.html. For this project, I had not used the main.css. All the styles were added into the about.html file directly.

3. articles.json and categories.json (located in data folder)

For the articles.json file:

It contains an array of articles with details such as:
ID, title, content, author, publication status, and category.
Two articles: one about JavaScript and another about GitHub​(articles).
For the categories.json file:

It includes an array of categories with:
ID and name.
Two categories: Programming Language and Version Control​(categories).


4. content-service.js

For the content-service.js file:

It is a Node.js module that manages articles and categories.
It reads and parses data from two JSON files (articles.json and categories.json).
It provides three main functions:
initialize(): Reads and parses the JSON files.
getAllArticles(): Returns all articles.
getCategories(): Returns all categories​(content-service).


5. index.js

For the index.js file:

It sets up an Express.js server.
Serves static files from the public directory.
Defines two routes:
The root route ("/") redirects to the About page.
The "/about" route serves the about.html file from the views folder.
The server listens on port 3243​(index).


6. package-lock.json

For the package-lock.json file:

It details the dependency tree for the project named assignment-2 (version 1.0.0).
Specifies installed packages, their versions, and the integrity of each package for security.
Lists dependencies like Express.js, body-parser, and their associated modules, ensuring consistent builds across environments​(package-lock).



7. package.json

For the package.json file:

It defines the project assignment-2 (version 1.0.0).
Specifies the main entry point as index.js.
Lists Express.js (version 4.21.1) as the only dependency.
Contains basic metadata like name, version, scripts, and license but lacks a description and author details​(package).



8. server.js

For the server.js file:

It sets up an Express.js server on port 3243.
Uses the content-service module to load articles and categories.
Defines routes for:
Home ("/") and About ("/about"), serving the about.html page.
"/articles" to fetch all articles.
"/categories" to fetch all categories.
Initializes the content service before setting up routes and starting the server​(server).


9. vercel.json 

For the vercel.json file:

It is a configuration file for deploying the app on Vercel.
Specifies the build process for server.js using the @vercel/node environment, including files from the "data/ directory".
Defines a route that redirects all requests to server.js​(vercel).