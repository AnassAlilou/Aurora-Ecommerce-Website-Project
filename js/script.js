const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

bar.addEventListener('click', function (){
    nav.classList.add('toggle');

});
close.addEventListener('click', function(){
    nav.classList.remove('toggle');
})