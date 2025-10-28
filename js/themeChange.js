var root = document.documentElement;
var theme = document.querySelector(".changeTheme");

document.addEventListener('DOMContentLoaded', function(){
    loadTheme();
})

function loadTheme(){
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark'){
        dark = false;
        darkLight();
    }
    else{
        dark = true;
        darkLight();
    }
}

function darkLight() { // Получаем корневой элемент // Получаем элемент темы
    console.log(theme)
    if (!dark) {
        theme.innerHTML = "Светлая тема";
        root.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        theme.innerHTML = "Темная тема";
        root.classList.remove('dark-mode'); 
        localStorage.setItem('theme', 'light');
    }
    
    dark = !dark;
}