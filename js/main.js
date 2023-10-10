const btn = document.querySelector(".header__close"),
    burger = document.querySelector(".header__burger"),
    menu = document.querySelector(".header__container");

btn.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.classList.toggle('hidden');
});

