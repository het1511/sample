/****************************************************************************************************

Author : Dhruv Jiten Patel
Student ID : 104998232
Course: WEB322
Date: 2024/10/12

*********************************************************************************************************/

const contentService = require('./content-service');
const express = require('express');
const path = require('path');

const app = express();
const port = 3243;

app.use(express.static('public'));

app.get('/categories', (req, res) => {
    contentService.getCategories()
        .then((data) => res.json(data))
        .catch((err) => res.status(404).json({ message: "No categories found", error: err }));
});

// Initialize content service before setting up routes
contentService.initialize()
    .then(() => {
        console.log("Content service initialized");

        // Route for Home ('/')
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'views', 'about.html'));
        });

        // Route for About ('/about')
        app.get('/about', (req, res) => {
            res.sendFile(path.join(__dirname, 'views', 'about.html'));
        });

        // Route for fetching all articles ('/articles')
        app.get('/data/articles', (req, res) => {
            contentService.getAllArticles()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json({ message: err });
                });
        });

        // Route for fetching all categories ('/categories')
        app.get('/data/categories', (req, res) => {
            contentService.getCategories()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json({ message: err });
                });
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

    })
    .catch((err) => {
        console.error(`Failed to initialize content service: ${err}`);
    });
