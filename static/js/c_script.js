window.onload = function(){

    let button = document.getElementById("div_btn");

    button.addEventListener("click", function() {
        var menu = document.getElementById("menu_list");
        //var div_menu = document.getElementById('div_btn');
        menu.classList.toggle('hidden');
    });
}