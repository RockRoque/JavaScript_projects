// Get the dropdown elements
const frequencyDropdown = document.getElementById("frequency");
const rangeDropdown = document.getElementById("range");

// Add an event listener to the frequency dropdown
frequencyDropdown.addEventListener("change", function() {
  // Clear the range dropdown
  rangeDropdown.innerHTML = "";

  // Get the selected frequency
  const frequency = this.value;

  // Set the options for the range dropdown based on the selected frequency
  if (frequency === "quarterly") {
    const options = ["January - March", "April - June", "July - September", "October - December"];
    options.forEach(function(option) {
      const element = document.createElement("option");
      element.value = option;
      element.text = option;
      rangeDropdown.add(element);
    });
  } else if (frequency === "semi-monthly") {
    const options = ["1/1 - 1/15", "1/16 - 1/31", "2/1 - 2/15", "2/16 - 2/28 or 2/29", "3/1 - 3/15", "3/16 - 3/31", "4/1 - 4/15", "4/16 - 4/30", "5/1 - 5/15", "5/16 - 5/31", "6/1 - 6/15", "6/16 - 6/30", "7/1 - 7/15", "7/16 - 7/31", "8/1 - 8/15", "8/16 - 8/31", "9/1 - 9/15", "9/16 - 9/25 Non-EFT", "9/16 - 9/26 EFT", "9/26 - 9/30 Non-EFT", "9/27 - 9/30 EFT", "10/1 - 10/15", "10/16 - 10/31", "11/1 - 11/15", "11/16 - 11/30", "12/1 - 12/15", "12/16 - 12/31"];
    options.forEach(function(option) {
      const element = document.createElement("option");
      element.value = option;
      element.text = option;
      rangeDropdown.add(element);
    });
  }
});
