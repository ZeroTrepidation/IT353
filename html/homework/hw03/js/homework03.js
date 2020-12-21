/* Homework 03
Name:
Section:
add loop and other code here ... */

/* using constant, can also use var if using old browser*/
const tax_rate = 0.10;
const shipping_threshold = 1000;

/* running total for subtotals */
var subtotal = 0;

for (var i = 0; i < 3; i++) {
    var total = calculateTotal(quantities[i], prices[i]);
    outputCartRow(filenames[i], titles[i], quantities[i], prices[i], total);
    subtotal += total;
  }

var tax = calculateTax(subtotal, tax_rate);
var shipping = calculateShipping(subtotal, shipping_threshold);
var grand = calculateGrandTotal(subtotal, tax, shipping);
