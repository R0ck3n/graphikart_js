const fetchage = async () => {
  const r = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: "Mon premier article" }),
    }
  );

  return r.ok ? r.json() : new Error("Fail");
};

fetchage().then((users) => console.log(users));
/***TEST ******/
