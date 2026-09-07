// script.js

const themeButton = document.getElementById("themeButton");


// Загружаем сохранённую тему
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeButton.textContent = "☀️";
}


// Переключение темы
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    if (isLight) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});