const express = require("express");
const router = express.Router();
const model = require("../models/userModel");

router.get("/display", (req, res)=>{
    model.query("SELECT id, first_name, last_name, email, phone_number, address FROM contacts",
    (fetchErr, fetchResults) =>{
        if(fetchErr){
            console.error("Error fetching your contacts: "+ fetchErr);
            res.status(500).send(" Error fetching your contacts");
        }else{
            const contactList = [];
            for(const row of fetchResults){
                const fnameDetails = row.first_name;
                const lnameDetails = row.last_name;
                const emailDetails = row.email;
                const phonenoDetails = row.phone_number;
                const addressDetails = row.address;
                const contactId = row.id;
                
                contactList.push({
                     fnameDetails,
                     lnameDetails, 
                     emailDetails,
                     phonenoDetails, 
                     addressDetails, 
                     contactId,
                });
            }
            res.render("display", { contactList });
        }
    });
});
// Delete
router.get("/delete/:id", (req, res) => {
    const contactId = req.params.id;

    // Use the contactId to delete the contact from the database
    model.query("DELETE FROM contacts WHERE id = ?", [contactId], (deleteErr) => {
        if (deleteErr) {
            console.error("Error deleting the contact: " + deleteErr);
            res.status(500).send("Error deleting the contact");
        } else {
            res.redirect("/display");
        }
    });
});
// Edit
router.get("/edit/:id", (req, res)=>{
    const contactId = req.params.id;
     // Retrieve the contact details from the database based on contactId
     model.query("SELECT * FROM contacts WHERE id  = ?", 
     [contactId],
     (fetchErr, fetchResults)=>{
       if(fetchErr){
        console.error("Error fetching contact details for editing:" + fetchErr);
        res.status(500).send("Error fetching contact details for editing");
       }else{
        if (fetchResults.length === 0){
            res.status(404).send("Contact not found");
        }else{
            const contactDetails = fetchResults[0];
            res.render("edit", { contact });
        }
       }
     });    
});

router.post("/edit/:id", (req, res) => {
    const contactId = req.params.id;
    const updatedDetails = req.body; // Contains the updated contact details

    // Update the contact details in the database based on contactId
    model.query("UPDATE contacts SET ? WHERE id = ?", [updatedDetails, contactId], (updateErr) => {
        if (updateErr) {
            console.error("Error updating the contact: " + updateErr);
            res.status(500).send("Error updating the contact");
        } else {
            // Redirect to the display page 
            res.redirect("/display");
        }
    });
});


module.exports = router;