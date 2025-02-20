// Populate year dropdown with next 10 years
function populateYears() {
    const yearSelect = document.getElementById('expiryYear');
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < 10; i++) {
        const year = currentYear + i;
        const option = document.createElement('option');
        option.value = year.toString().slice(-2); // Get last 2 digits
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Format card number with spaces
function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    input.value = value;
}

// Initialize the form
document.addEventListener('DOMContentLoaded', function() {
    populateYears();

    // Add card number formatting
    const cardInput = document.getElementById('cardNumber');
    cardInput.addEventListener('input', function() {
        formatCardNumber(this);
    });
});

function validateDebitCardForm(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const cvv = document.getElementById('cvv').value;
    const month = document.getElementById('expiryMonth').value;
    const year = document.getElementById('expiryYear').value;

    // Basic validation
    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number');
        return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV');
        return false;
    }

    if (!month || !year) {
        alert('Please select both expiry month and year');
        return false;
    }

    // Store the data
    sessionStorage.setItem('cardNumber', cardNumber);
    sessionStorage.setItem('expiryMonth', month);
    sessionStorage.setItem('expiryYear', year);

    // Proceed to next step (you can modify this to go to your next page)
    alert('Form validated successfully!');
    return true;
}
