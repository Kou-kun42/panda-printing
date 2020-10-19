// Getting selectors for the inputs
const filamentlengthInput = document.querySelector("#filamentlength-input");
const printweightInput = document.querySelector("#printweight-input");
const materialSelect = document.querySelector("#material-select");
const zipcodeInput = document.querySelector("#zipcode-input");
const printCostDisplay = document.querySelector("#printcost-display");
const shippingCostDisplay = document.querySelector("#shippingcost-display");
const totalCostDisplay = document.querySelector("#totalcost-display");

// Event Listener for getWeight()
filamentlengthInput.addEventListener("input", getWeight);
materialSelect.addEventListener("input", getWeight);

// Event Listener for getLength()
printweightInput.addEventListener("input", getLength);

// Event Listener for shipCost()
zipcodeInput.addEventListener("input", shipCost);

// Calculates print cost
function handleCost() {
  // Gets rid of leading 0
  printweightInput.value = +printweightInput.value;
  // Assigns local variables
  const spoolCost = 25;
  const spoolWeight = 1000;
  const profit = 1.5;
  let printWeight = parseFloat(printweightInput.value);

  // Covers cases if negatives or non numbers are input
  if (printWeight < 0 || isNaN(printWeight)) {
    printweightInput.value = 0;
    printWeight = 0;
  }

  // Calculates material cost
  const printCost = (spoolCost / spoolWeight) * printWeight * profit;

  // Sets new print cost value
  printCostDisplay.innerHTML = printCost.toFixed(2);

  // Calls totalCost() to get the total cost estimate
  totalCost();
}

// Calculates new print weight whenever a new length is input
function getWeight() {
  // Gets rid of leading 0
  filamentlengthInput.value = +filamentlengthInput.value;
  // Assigns local variables
  let filamentLength = parseFloat(filamentlengthInput.value);
  const diameter = 1.75;
  const material = parseFloat(materialSelect.value);

  // Covers cases if negatives or non numbers are input
  if (filamentLength < 0 || isNaN(filamentLength)) {
    filamentlengthInput.value = 0;
    filamentLength = 0;
  }

  // Calculates new volume of filament to be printed
  const volume = Math.PI * (diameter / 2) ** 2 * filamentLength;
  // Calculates new weight using the material density
  const weight = volume * material;
  // Sets new weight value
  printweightInput.value = parseInt(weight);

  // Calls handleCost() to update the cost to reflect the new weight
  handleCost();
}

// Calculates new length of filament to be printed if the print weight, material type, or material diameter is changed
function getLength() {
  // Assigns local variables
  let weight = parseInt(printweightInput.value);
  const diameter = 1.75;
  const material = parseFloat(materialSelect.value);

  // Covers cases if negatives or non numbers are input
  if (weight < 0 || isNaN(weight)) {
    printweightInput.value = 0;
    weight = 0;
  }

  // Calculates volume using print weight and material density
  const volume = weight / material;
  // Calculates the new length using the volume and diameter of filament
  const length = volume / (Math.PI * (diameter / 2) ** 2);
  // Sets new length value
  filamentlengthInput.value = length.toFixed(2);

  // Calls handleCost() to update the cost to reflect the new weight
  handleCost();
}

// Calculates shipping cost
// Right now, I couldn't quite figure out how to get an actual zipcode cost estimate based
// on location to work with something like the USPS calculator
function shipCost() {
  const zipcode = zipcodeInput.value;
  const shipCost = 5;
  const emptyCost = 0;
  // Checks if 5 digits have been input before calculating
  if (zipcode.length == 5) {
    // Setting $5.00 as default shipping until I can figure out the proper method
    shippingCostDisplay.innerHTML = shipCost.toFixed(2);
  } else {
    // Reverts back to $0.00 if incorrect amount of numbers input
    shippingCostDisplay.innerHTML = emptyCost.toFixed(2);
  }

  // Calls totalCost() to get the total cost estimate
  totalCost();
}

// Adds print and shipping costs together
function totalCost() {
  const print = parseFloat(printCostDisplay.innerHTML);
  const shipping = parseFloat(shippingCostDisplay.innerHTML);
  const tax = 1.06;

  // Covers case if shipping or print cost is not calculated yet
  if (shipping > 0 && print > 0) {
    // Calculates total (with PA state tax)
    const total = (print + shipping) * tax;

    // Sets value to the display
    totalCostDisplay.innerHTML = total.toFixed(2);
  } else {
    const emptyCost = 0;
    totalCostDisplay.innerHTML = emptyCost.toFixed(2);
  }
}
