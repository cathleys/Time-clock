function time() {
  const d = new Date();
  const today = d.toLocaleTimeString();
  const h1 = document.querySelector("#time");
  h1.innerText = today;
}

setInterval(time, 1000);
