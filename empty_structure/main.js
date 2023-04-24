const app = document.querySelector("#app");
app.innerHTML = "Chargement...";

const articles = async () => {
  const r = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!r.ok) {
    app.innerHTML = "Impossible de Charger la page !";
    return;
  }

  app.innerHTML = "";
  return r.json();
};

articles().then((data) =>
  data.forEach((element) => {
    const newArticle = document.createElement("article");
    const newH2 = document.createElement("h2");
    const newp = document.createElement("p");

    newH2.append(element.title);
    newp.append(element.body);

    newArticle.append(newH2, newp);
    app.append(newArticle);
    console.log(element);
  })
);
