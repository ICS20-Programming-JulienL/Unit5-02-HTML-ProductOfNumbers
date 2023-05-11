// Created by: Julien Lamoureux
// Created on: May 2023
// This file contains the JS functions for index.html, Unit5-02-HTML-ProductOfNumbers

"use strict";

function calculateProduct() {

  // intialize product to 0
  let product = 0

  // initialize numbers to an empty string
  let numbers = ""
  
  // get first integer
  let firstInt = parseInt(document.getElementById("first-int").value)
  let absFirstInt = Math.abs(firstInt)
  
  // get second integer
  let secondInt = parseInt(document.getElementById("second-int").value)
   let absSecondInt = Math.abs(secondInt)

  // if the user enters nothing, tell them to enter two integers
  if ((isNaN(firstInt))||(isNaN(secondInt))) {
    numbers = "Please enter two integers."
  }
  // use a for loop to calculate the product from the two integers 
  else {
    for (let counter = 1; counter<= absSecondInt; counter++) {
      product += absFirstInt
    }
    numbers = firstInt+"*"+secondInt+"="+product
      if ((firstInt < 0)&&(secondInt>0)) {
        product = "-"+product
      }
      else if ((secondInt < 0)&&(firstInt>0)) {
        product= "-"+product
      }
    
  }
  // display the product
  document.getElementById('program-feedback').innerHTML = numbers
}