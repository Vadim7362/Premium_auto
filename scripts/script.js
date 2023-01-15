document.getElementById("main-button"). onclick = function () {
  document.getElementById("cars").scrollIntoView({behavior: "smooth"});
};

const buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("Price").scrollIntoView({behavior: "smooth"});
  }
};

document.getElementById("price-action").onclick = function () {
  if (document.getElementById("name").value === "") {
    alert("Заполните Иия");
  } else if (document.getElementById("phone").value === "") {
    alert("Укажите Ваш номер телефона");
  } else if (document.getElementById("car").value === "") {
    alert("Укажите понравившийся автомобиль");
  } else {
    alert("Мы свяжемся с Вами в ближайшее время");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * -0.1) / 4) + 'px,' + ((event.clientY * -0.1) / 4) + 'px,0px)';
});

  const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
      elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
})
});