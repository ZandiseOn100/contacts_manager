const express = require("express");
const router = express.Router();
const model = require("../models/userModel");

router.get("/", (req, res) => {
    const errorMessage = req.query.error || ""; // Get the error message from the query parameter
    res.render("index", { errorMessage });
}); 

router.post("/submit-form", (req, res) => {
    const { first_name, last_name, email, phone_number, address } = req.body;

    // Check if the email or phone number already exists
    model.query(
        "SELECT id FROM contacts WHERE email = ? OR phone_number = ?",
        [email, phone_number],
        (queryErr, existingContacts) => {
            if (queryErr) {
                console.error("Error checking for existing contacts: " + queryErr);
                res.redirect("/?error=Error%20checking%20for%20existing%20contacts");
            } else if (existingContacts.length > 0) {
                // An existing contact with the same email or phone number was found
                res.redirect("/?error=A%20contact%20with%20this%20email%20or%20phone%20number%20already%20exists");
            } else {
                // No existing contact with the same email or phone number was found, so insert the new contact
                model.query(
                    "INSERT INTO contacts (first_name, last_name, email, phone_number, address) VALUES (?, ?, ?, ?, ?)",
                    [first_name, last_name, email, phone_number, address],
                    (insertErr, results) => {
                        if (insertErr) {
                            console.error("Error inserting contact details: " + insertErr);
                            res.redirect("/?error=Error%20inserting%20contact%20details");
                        } else {
                            console.log("User was redirected to the display page.");
                            res.redirect("/display");
                        }
                    }
                );
            }
        }
    );
});

module.exports = router;
