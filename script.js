// Get error message.
const error = document.getElementById("error-message");

// Submit form, clear after submit and block page refresh.

form.onsubmit = function(event) {
    postfeedBack();
    let form = document.getElementById("form");
    form.reset();
    return false;
}

// Check for blank form field, if true throw error message, else post feedback comment.

function postfeedBack() {
    let textArea = document.querySelector("textarea");
    let inputFirstName = document.querySelector("#first-name");
    let inputLastName = document.querySelector("#last-name");

    if (!inputFirstName.value.trim() || !inputLastName.value.trim() || !textArea.value.trim()) {
    error.style.display = "block";
        } else {
            error.style.display = "none";
            feedBack();
        }
    }
