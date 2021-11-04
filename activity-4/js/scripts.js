//welcome message
var user = 'Pam';
var salutation = 'Hello ';
var greeting = salutation + user + '! Here are the latest Matlock episode reviews'
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 20, 
    StudentDiscount = .10, 
    StudentPrice = price - (price * StudentDiscount),
    priceEl = document.getElementById('price'),
    StudentPriceEl = document.getElementById('student-price');

    priceEl.textContent = price.toFixed(2);
    StudentPriceEl.textContent = StudentPrice.toFixed(2);
