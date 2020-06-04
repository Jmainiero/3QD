Data Tech Coding Challenge
_____________________

#1 -
Write a function that pulls the product price and currency from the DOM, then returns an object with the price as a number, and the currency as a currency code. 
Ie:
  obj = {
    price: 19.99,
    currency: ‘USD’ 
  }

#2 - 
Write a function that assigns a click handler to all the ‘Sign Up Now’ buttons on the page. The click handler should trigger an ‘alert’, with text that indicates which button was clicked. 
Ie:
  ‘Clicked button 1’, ‘Clicked button 2’, etc.
  
#3 - 
Write a function that attaches click listeners to all the buttons in the top menu. 

The click handler should first check whether or not a document cookie named ‘browserClick’ has been set on the page. If the cookie has not been set, the function should set the cookie to the text of the button clicked; if it has been set, the function should trigger an alert that displays the cookie value.
