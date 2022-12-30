const contentBox = document.querySelector("#content");

window.onload = (event) => {
  carregarSobre();
};

function makeFetch(url) {
  fetch(url)
    .then((resp) => resp.text())
    .then((html) => (contentBox.innerHTML = html))
    .catch((err) => {
      console.warn(err);
    });
}

function carregarSobre() {
  makeFetch("../../pages/sobre.html");
}

function carregarEducacao() {
  makeFetch("../../pages/educacao.html");
}

function carregarLinks() {
  makeFetch("../../pages/links.html");
}
