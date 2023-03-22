function decompte(duration) {
  console.log(duration);
  const countdown = setInterval(() => {
    duration--;
    console.log(duration);
    if (duration === 0) {
      clearInterval(countdown);
      setTimeout(() => {
        console.log("BADABOOM !");
      }, 300);
    }
  }, 1000);
}

decompte(3);
