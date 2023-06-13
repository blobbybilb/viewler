// HORIZONTALsa
(() => {
  // draggable div
  const div = document.createElement("div");
  div.id = "horizontal-ruler";
  div.style.position = "fixed";
  div.style.top = "80%";
  div.style.left = "60%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.width = "calc(100vw + 6vw)";
  div.style.height = "50px";
  div.style.backgroundColor = "rgba(0, 200, 200, 0.8)";
  div.style.borderRadius = "5px";
  div.style.zIndex = "9999";
  div.style.cursor = "move";
  div.style.userSelect = "none";

  // mouse-following mark
  const mouseMark = document.createElement("div");
  mouseMark.style.position = "absolute";
  mouseMark.style.top = "0";
  mouseMark.style.width = "2px";
  mouseMark.style.height = "20px";
  mouseMark.style.backgroundColor = "red";
  mouseMark.style.zIndex = "1";
  div.appendChild(mouseMark);

  // ruler markings
  for (let i = 0; i <= 100; i++) {
    const mark = document.createElement("div");
    mark.style.position = "absolute";
    mark.style.top = "0";
    mark.style.left = `calc(${i}vw + 2vw)`;
    mark.style.width = "1px";
    mark.style.height = "15px";
    mark.style.backgroundColor = "black";
    mark.style.opacity = "0.7";
    div.appendChild(mark);

    // longer marks every 5
    if (i % 5 === 0) {
      mark.style.height = "20px";
    }

    // numbers every 5
    if (i % 5 === 0) {
      const number = document.createElement("span");
      number.style.position = "absolute";
      number.style.top = "22px";
      number.style.left = `calc(${i}vw - 2px + 2vw)`;
      number.style.color = "black";
      number.style.fontWeight = "lighter";
      number.style.fontSize = "10px";
      number.style.fontFamily = "sans-serif";
      number.textContent = i;

      div.appendChild(number);
    }
  }

  // "wv" label
  const vwLabel = document.createElement("span");
  vwLabel.style.position = "absolute";
  vwLabel.style.bottom = "7px";
  vwLabel.style.left = "4px";
  vwLabel.style.color = "black";
  vwLabel.style.fontWeight = "lighter";
  vwLabel.style.fontSize = "10px";
  vwLabel.style.fontFamily = "sans-serif";
  vwLabel.textContent = "vw";
  div.appendChild(vwLabel);

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  div.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - div.offsetLeft;
    offsetY = event.clientY - div.offsetTop;
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      div.style.left = event.clientX - offsetX + "px";
      div.style.top = event.clientY - offsetY + "px";
    }

    const mouseX = event.clientX - div.getBoundingClientRect().left;
    const rulerWidth = div.clientWidth;
    const mouseMarkWidth = mouseMark.clientWidth;
    const minX = 7;
    const maxX = rulerWidth - mouseMarkWidth - 7;
    const boundedX = Math.max(minX, Math.min(mouseX, maxX));
    mouseMark.style.left = `${boundedX}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  document.body.appendChild(div);
})();

// VERTICAL
(() => {
  // draggable div
  const div = document.createElement("div");
  div.id = "vertical-ruler";
  div.style.position = "fixed";
  div.style.top = "60%";
  div.style.left = "80%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.width = "50px";
  div.style.height = "calc(100vh + 6vh)";
  div.style.backgroundColor = "rgba(200, 200, 0, 0.8)";
  div.style.borderRadius = "5px";
  div.style.zIndex = "9999";
  div.style.cursor = "move";
  div.style.userSelect = "none";

  const mouseMark = document.createElement("div");
  mouseMark.style.position = "absolute";
  mouseMark.style.left = "0";
  mouseMark.style.width = "20px";
  mouseMark.style.height = "2px";
  mouseMark.style.backgroundColor = "red";
  mouseMark.style.zIndex = "1";
  div.appendChild(mouseMark);

  for (let i = 0; i <= 100; i++) {
    const mark = document.createElement("div");
    mark.style.position = "absolute";
    mark.style.left = "0";
    mark.style.top = `calc(${i}vh + 2vh)`;
    mark.style.width = "15px";
    mark.style.height = "1px";
    mark.style.backgroundColor = "black";
    mark.style.opacity = "0.7";
    div.appendChild(mark);

    if (i % 5 === 0) {
      mark.style.width = "20px";
    }

    if (i % 5 === 0) {
      const number = document.createElement("span");
      number.style.position = "absolute";
      number.style.left = "22px";
      number.style.top = `calc(${i}vh - 6px + 2vh)`;
      number.style.color = "black";
      number.style.fontWeight = "lighter";
      number.style.fontSize = "10px";
      number.style.fontFamily = "sans-serif";
      number.textContent = i;

      div.appendChild(number);
    }
  }

  const vhLabel = document.createElement("span");
  vhLabel.style.position = "absolute";
  vhLabel.style.top = "4px";
  vhLabel.style.right = "4px";
  vhLabel.style.color = "black";
  vhLabel.style.fontWeight = "lighter";
  vhLabel.style.fontSize = "10px";
  vhLabel.style.fontFamily = "sans-serif";
  vhLabel.textContent = "vh";
  div.appendChild(vhLabel);

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  div.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - div.offsetLeft;
    offsetY = event.clientY - div.offsetTop;
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      div.style.left = event.clientX - offsetX + "px";
      div.style.top = event.clientY - offsetY + "px";
    }

    const mouseY = event.clientY - div.getBoundingClientRect().top;
    const rulerHeight = div.clientHeight;
    const mouseMarkHeight = mouseMark.clientHeight;
    const minY = 7;
    const maxY = rulerHeight - mouseMarkHeight - 7;
    const boundedY = Math.max(minY, Math.min(mouseY, maxY));
    mouseMark.style.top = `${boundedY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  document.body.appendChild(div);
})();
