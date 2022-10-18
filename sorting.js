const container = document.querySelector(".data-container");

function barfunc(num = 10) {
  for (var i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * (50-5))+5;
    const bar = document.createElement("div");
    //var ele=document.createElementByID("array-btn") ;
    bar.classList.add("bar");
    bar.style.height = `${value * 10}px`;
    bar.style.transform = `translateX(${i* 55}px)`;
    const barlabel = document.createElement("label");
    barlabel.classList.add("bar_id")
    barlabel.innerHTML = value;
    bar.appendChild(barlabel);

    container.appendChild(bar);

  }
}
barfunc();

function generate() {
  window.location.reload();
}
