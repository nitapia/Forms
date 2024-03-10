document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the input field element
    const inputField = document.getElementById('inputField');

    // Add an event listener to the form
    const form = document.getElementById('myForm');
    form.addEventListener('submit', validateAndSubmit);

    // Function to validate input value using a regular expression
    function validateInput(inputValue) {
        // Alphanumeric regular expression (letters and numbers only)
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;

        if (!alphanumericRegex.test(inputValue)) {
            // Display specific error message
            alert('Please enter letters and numbers only.');
            return false;
        }

        return true;
    }

    // Function to handle form submission
    function validateAndSubmit(event) {
        event.preventDefault(); // Prevent form submission

        const inputValue =inputField.value;
        if (validateInput(inputValue)) {
            // Display confirmation (customize this message)
            alert('That is correct form has been submitted.');
            // Add additional logic here to handle form submission
        }
    }

    // Test your form by entering alphanumeric and non-alphanumeric values
    // Verify that the error message displays correctly for non-alphanumeric input
    // and that the form is not submitted in such cases.
});
