function deleteContact(contactId) {
    fetch(`/delete/${contactId}`, {
        method: "GET",
    })
    .then((response) => {
        if (response.status === 200) {
            // The contact has been deleted, you can update the UI or take any other action
            location.reload(); // Refresh the page after deletion
        } else {
            // Handle errors, display a message, or perform other actions
        }
    })
    .catch((error) => {
        console.error("Error deleting the contact: " + error);
        // Handle errors, display a message, or perform other actions
    });
}

//Second form 

function toggleForm(contactId) {
    const form = document.getElementById(`editForm_${contactId}`);
    console.log(`Toggling form for contactId: ${contactId}`);
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

//Close button
function closeForm(contactId) {
    const form = document.getElementById(`editForm_${contactId}`);
    form.style.display = "none";
}



