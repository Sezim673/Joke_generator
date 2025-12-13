const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");
const jokeBtn = document.getElementById("jokeBtn");
const quoteBtn = document.getElementById("quoteBtn");

function showLoading() {
  textEl.textContent = "Загрузка...";
  authorEl.textContent = "";
  textEl.classList.add("visible");
}

async function fetchJoke() {
  showLoading();
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await res.json();
    textEl.textContent = data.joke;
    textEl.classList.add("visible");
  } catch {
    textEl.textContent = "Не удалось загрузить шутку.";
  }
}

jokeBtn.onclick = fetchJoke;

