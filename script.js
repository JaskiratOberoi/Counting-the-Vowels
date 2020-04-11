let count = 0;
function counter() {
  let text = document.getElementById("text").value;
  text.toLowerCase();

  for (var i = 0; i < text.length; i++) {
    var x = text[i];
    x.toUpperCase();
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") count += 1;
  }
  document.getElementById("ans").innerText =
    "Total number of vowels are " + count;
}
