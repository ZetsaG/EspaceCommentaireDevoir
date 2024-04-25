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

// Feedback comment function, creating new div with HTML element inside including form field information.

function feedBack() {
    
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let fullName = (firstName + " " + lastName);
    let feedBackText = document.getElementById("message").value;
    
    let newDiv = document.createElement("div");
    newDiv.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
    newDiv.insertAdjacentHTML(`beforeend`, `
        <div class="flex-1 py-10">
            <h3 class="font-medium text-gray-900">${fullName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${feedBackText}</p>
            </div>
        </div> 
    `);

    let feedBackDiv = document.getElementById("comment-list");
    feedBackDiv.appendChild(newDiv);
}