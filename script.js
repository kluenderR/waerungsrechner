
function calc() {
    //greift auf die id euroField zu
  let euro = euroField.value;
  // gibt der Variablen result das Ergebnis
  let result = euro * 0.981;
  // gibt das Ergebnis bei id=usd aus
  usd.value = result.toFixed(2).replace('.',',');
}

//https://www.youtube.com/watch?v=kAEt6JxrkjI
// pixabay.com
//color picker: https://www.w3schools.com/colors/colors_picker.asp
// google fonts