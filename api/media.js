/* jshint esversion: 8 */

// This API submodule handles all the requests to the api/media route.

// Require the express framework and initialize a router object.

const express = require('express');
const router = express.Router();

// Require the custom upload object which will be used as middleware in routes.

const upload = require("./../apiFunctions/multerUploads");

// Require the API controller that handles different requests.

const apiController = require("./../apiFunctions/apiController");




// Handle the requests to the api/media/intro route.
// This route represents the intro part of the media section on the about page.

router.route("/intro")


  // Update the intro part of the media section.

  .put(upload().text, async (req, res) => {

    // Multer makes the user-inputted data available in the req.body variable.
    // Pass that into the function that updates the database along with the name of the database table.
    // The third argument is an index that denotes the position of the relevant entry in the database table.

    // The function is asynchronous so use the await keyword.
    await apiController.update.text(req.body, "intros", 3);

    // Send a response back to the browser.

    res.send("OK!");
  });




// Handle the requests to the api/media/iframes route.
// This route represents the embedded content part of the media section on the about page.

router.route("/iframes")


  // Update the intro part of the media section.

  .put(upload().text, async (req, res) => {

    // Multer makes the user-inputted data available in the req.body variable.
    // Pass that into the function that updates the database along with the name of the database table.
    // The function is asynchronous so use the await keyword.

    await apiController.update.iframes(req.body, "iframes");

    // Send a response back to the browser.

    res.send("OK!");
  })


  // Post a new iframe to the media part of the about page.

  .post(async (req, res) => {

    // Call the function that creates a new entry to the specified database table.
    // The function is asynchronous, so use the await keyword.

    await apiController.create("iframes");

    // Send a response back to the browser.

    res.send("OK");
  });




// Handle the requests to the routes beginning with api/media/iframes and ending with the custom parameter of id.
// These routes represent the individual iframes on the media part of the about page.

router.route("/iframes/:id")


  // Delete an iframe from the media part of the about page.

  .delete(async (req, res) => {

    // Call the function that deletes the specified entry from the specified database table.
    // The index for locating the entry in the table can be found in the api endpoint.
    // Also make this index 0-based.

    await apiController.delete("iframes", req.params.id - 1);

    // Send a response back to the browser.

    res.send("OK!");
  });




// Handle the requests to the api/media/sections route.
// This route represents all the dynamic sections of the media part on the about page.

router.route("/sections")


  // Post a new section to the media part of the about page.

  .post(async (req, res) => {

    // Call the function that creates a new entry to the specified database table.
    // The function is asynchronous, so use the await keyword.

    await apiController.create("media_sections");

    // Send a response back to the browser.

    res.send("OK");
  });




// Handle the requests to the routes beginning with api/media/sections and ending with the custom parameter of id.
// These routes represent the text sections on the media part of the about page.

router.route("/sections/:id")


  // Update the sections of the media part of the about page.

  .put(upload().text, async (req, res) => {

    // Multer makes the user-inputted data available in the req.body variable.
    // Pass that into the function that updates the database along with the name of the database table.
    // This route updates the section specified in the custom parameter id.
    // Thos custom parameter also indicates the position in which the relevant section can be found in the database table
    // (deduct 1 from this number, because js is 0-based).
    // The function is asynchronous so use the await keyword.

    await apiController.update.section(req.body, "media_sections", (req.params.id - 1));

    // Send a response back to the browser.

    res.send("OK!");
  })


  // Delete a section from the media part of the about page.

  .delete(async (req, res) => {

    // Call the function that deletes the specified entry from the specified database table.
    // The index for locating the entry in the table can be found in the api endpoint.
    // Also make this index 0-based.

    await apiController.delete("media_sections", req.params.id - 1);

    // Send a response back to the browser.

    res.send("OK!");
  });

// Export the router to the server file.

module.exports = router;
