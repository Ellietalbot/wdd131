let count = 0; 
import { participantTemplate, successTemplate } from './templates.js';

const participantsContainer = document.querySelector('.participants');
const addButton = document.querySelector('#add');
const adult_name_input = document.getElementById('adult_name');
const form = document.querySelector('form');

addButton.addEventListener('click', function() {
    addButton.insertAdjacentHTML("beforebegin", participantTemplate(count));
    count++; 

    if (!participantsContainer.classList.contains('participants-grid')) {
        participantsContainer.classList.add('participants-grid');
    }
});



// Form submit handler
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const adult_name = adult_name_input.value; // Get the adult name from the form
    const fees = totalFees(); // Get the total fees

    // Prepare the info object to pass to successTemplate
    const info = {
        adult_name: adult_name,
        num_participants: count,
        fees: fees
    };

    // Insert the success message into the summary section
    document.getElementById('summary').innerHTML = successTemplate(info);

    // Hide the form and show the summary
    form.style.display = "none";
    document.getElementById('summary').style.display = "block";
});

// Calculate total fees
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]"); // Get all fee inputs
    let total_fees = 0;

    feeElements.forEach(feeElement => {
        total_fees += parseFloat(feeElement.value) || 0; // Add the fee or 0 if empty
    });

    return total_fees;
}
