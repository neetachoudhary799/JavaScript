window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll event handled");
  }, 500)
);