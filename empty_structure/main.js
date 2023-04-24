(function destroy() {
  const trash = document.querySelectorAll(".bi-trash");
  trash.forEach((el) => {
    el.addEventListener("click", () => {
      el.parentNode.parentNode.remove();
    });
  });
})();

const fetchTodo = async () => {
  try {
    const r = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "applicatio/json",
        },
      }
    );
    if (!r.ok) {
      throw new Error("Erreur serveur");
    }
    return r.json();
  } catch (e) {
    console.error(e);
  }
};

fetchTodo().then((e) => console.log(e));
