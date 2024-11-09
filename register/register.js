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


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const adult_name = adult_name_input.value; 
    const fees = totalFees(); 
    const info = {
        adult_name: adult_name,
        num_participants: count,
        fees: fees
    };

    document.getElementById('summary').innerHTML = successTemplate(info);
    form.style.display = "none";
    document.getElementById('summary').style.display = "block";
});


function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]"); 
    let total_fees = 0;

    feeElements.forEach(feeElement => {
        total_fees += parseFloat(feeElement.value) || 0; 
    });

    return total_fees;
}
