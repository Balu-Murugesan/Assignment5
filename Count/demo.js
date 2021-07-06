let i = 0;
function increment() {
  i++;
  document.getElementById("inc").value = i;
}

function decrement() {
  i--;
  document.getElementById("inc").value = i;
}

function zero() {
  document.getElementById("inc").value = 0;
  i = 0;
}
