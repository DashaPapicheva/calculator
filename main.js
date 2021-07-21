let btnColl = document.querySelectorAll("input.BTN");
let currentValue = "";
let eventButton; 
let resultsArray = [];

btnColl.forEach( function(item) {
  item.addEventListener("click", function() { 
    switch (item.value) {
      case "C":
        location.reload();
      default:
        if (!isNaN(Number(item.value))) {
          document.getElementById("numbersInputPlace").value += item.value;
        } else {
        currentValue = Number(document.getElementById("numbersInputPlace").value);
        eventButton = item.value;
        document.getElementById("numbersInputPlace").value = "";
        resultsArray.push(currentValue);
        if (eventButton === "=") {
          document.getElementById("numbersInputPlace").value = eval(resultsArray.join(""));
          if (eval(resultsArray.join("")) === Infinity) {
            alert("Делить на 0 нельзя!")
            document.getElementById("numbersInputPlace").value = "";
          }
          resultsArray = [];
        } else {
          let stepResult = eval(resultsArray.join(""));
          resultsArray.splice(0, resultsArray.length);
          resultsArray.push(stepResult, eventButton);
        }
    }
   }  
  });
});
