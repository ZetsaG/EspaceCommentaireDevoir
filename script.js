// Get error message.
const error = document.getElementById("error-message");

// Submit form, clear after submit and block page refresh.

form.onsubmit = function(event) {
    postfeedBack();
    let form = document.getElementById("form");
    form.reset();
    return false;
}