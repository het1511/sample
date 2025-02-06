/****************************************************************************************************

Author : Dhruv Jiten Patel
Student ID : 104998232
Course: WEB322
Date: 2024/10/12

*********************************************************************************************************/

const fs = require('fs');
const path = require('path');

let articles = [];
let categories = [];

function initialize() {
    return new Promise((resolve, reject) => {
        const articlesPath = path.join(__dirname, 'data', 'articles.json');
        const categoriesPath = path.join(__dirname, 'data', 'categories.json');

        // Check if articles.json exists
        if (!fs.existsSync(articlesPath)) {
            reject("Error: articles.json file does not exist in the data folder.");
            return;
        }

        // Read articles.json
        fs.readFile(articlesPath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading articles.json:", err.message);
                reject("Unable to read articles.json");
                return;
            }

            try {
                articles = JSON.parse(data); // Parse the JSON into the articles array
                console.log("articles.json loaded successfully.");
            } catch (parseErr) {
                console.error("Error parsing articles.json:", parseErr.message);
                reject("Error parsing articles.json");
                return;
            }

            // Check if categories.json exists
            if (!fs.existsSync(categoriesPath)) {
                reject("Error: categories.json file does not exist in the data folder.");
                return;
            }

            // Read categories.json
            fs.readFile(categoriesPath, 'utf8', (err, data) => {
                if (err) {
                    console.error("Error reading categories.json:", err.message);
                    reject("Unable to read categories.json");
                    return;
                }

                try {
                    categories = JSON.parse(data); // Parse the JSON into the categories array
                    console.log("categories.json loaded successfully.");
                } catch (parseErr) {
                    console.error("Error parsing categories.json:", parseErr.message);
                    reject("Error parsing categories.json");
                    return;
                }

                // Both files are read and parsed successfully
                resolve("Data successfully initialized");
            });
        });
    });
}

function getAllArticles() {
    return new Promise((resolve, reject) => {
        if (articles.length > 0) {
            resolve(articles);
        } else {
            reject("No articles found");
        }
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        if (categories.length > 0) {
            resolve(categories);
        } else {
            reject("No categories found");
        }
    });
}

module.exports = {
    initialize,
    getAllArticles,
    getCategories
};
