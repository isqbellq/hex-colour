 "use strict"

 function generateColourName() {
   let randomColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
   return randomColour;
 }

 function printColour() {
  let colour = generateColourName(); 
  $(".display").css({"backgroundColor": colour});
  $(".colour-name").text(colour);
}

 $("button").click(printColour);