function updateSecondDropdown() {
  // Get the selected value from the first dropdown menu
  var firstDropdownValue = document.getElementById("first-dropdown").value;

  // Get the second dropdown menu element
  var secondDropdown = document.getElementById("second-dropdown");

  // Clear the current options in the second dropdown menu
  secondDropdown.innerHTML = "";

  // Depending on the selected value of the first dropdown menu,
  // add the appropriate options to the second dropdown menu
  if (firstDropdownValue === "option1") {
    secondDropdown.innerHTML = "<option value='option1'>Option 1</option>";
  } else if (firstDropdownValue === "option2") {
    secondDropdown.innerHTML = "<option value='option2'>Option 2</option>";
  } else if (firstDropdownValue === "option3") {
    secondDropdown.innerHTML = "<option value='option3'>Option 3</option>";
  }
}
