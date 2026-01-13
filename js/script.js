const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

bar.addEventListener('click', function (e){
    nav.classList.add('toggle');
    e.stopPropagation();
});
close.addEventListener('click', function(){
    nav.classList.remove('toggle');
});

window.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && nav.classList.contains('toggle')) {
        nav.classList.remove('toggle');
    }
})