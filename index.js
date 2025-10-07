let cursor = document.getElementById("cursor");
document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX - 15 + 'px';
    cursor.style.top = e.clientY - 15 + 'px';
    document.body.style.cursor = "url('/icons8-cursor.svg'), auto";

});
