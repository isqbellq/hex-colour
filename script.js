 "use strict"

 let generateColour = function() {
   let randomColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
   return randomColour;
 }

 let printColour = function() {
  let colour = generateColour(); 
  $(".display").css({"backgroundColor": colour});
  $(".colour-name").text(colour);
}

 $("button").click(printColour);
