document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById('namasales');
    const options = selectElement.getElementsByTagName('option');
    const filterInput = document.getElementById('filterInput');

    filterInput.addEventListener('input', function() {
        const filterText = filterInput.value.trim().toLowerCase();

        Array.from(options).forEach(option => {
            const optionValue = option.getAttribute('value').toLowerCase();
            const optionText = option.textContent.toLowerCase();
            
            if (optionValue.includes(filterText) || optionText.includes(filterText)) {
                option.style.display = '';
            } else {
                option.style.display = 'none';
            }
        });
    });
});

// Get the select element
var select = document.getElementById('bank');

// Convert options to array and sort in descending order by bank name
var options = Array.from(select.options);
options.sort(function(a, b) {
    var bankNameA = a.text.toUpperCase();
    var bankNameB = b.text.toUpperCase();
    if (bankNameA < bankNameB) return 1; // sort descending
    if (bankNameA > bankNameB) return -1;
    return 0;
});

// Clear existing options
select.innerHTML = '';

// Add sorted options back to select element
options.forEach(function(option) {
    select.appendChild(option);
});







// Get the select element
var select = document.getElementById('namaspv');
            
// Convert options to array and sort in descending order by name
var options = Array.from(select.options);
options.sort(function(a, b) {
    var nameA = a.text.toUpperCase();
    var nameB = b.text.toUpperCase();
    if (nameA < nameB) return 1; // sort descending
    if (nameA > nameB) return -1;
    return 0;
});

// Clear existing options
select.innerHTML = '';

// Add sorted options back to select element
options.forEach(function(option) {
    select.appendChild(option);
});




function formatCurrency(input) {
    var num = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    var formattedNum = new Intl.NumberFormat('id-ID').format(num); // Format with dot as thousand separator
    input.value = formattedNum;
}

// Function to convert input values to uppercase before submitting
function convertToUpper(event) {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text' || inputs[i].type === 'date') {
            inputs[i].value = inputs[i].value.toUpperCase();
        }
    }

    var selects = document.getElementsByTagName('select');
    for (var j = 0; j < selects.length; j++) {
        selects[j].value = selects[j].value.toUpperCase();
    }
}
