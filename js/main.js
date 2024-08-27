document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasMenu');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("openMenu").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });

    Array.from(document.querySelectorAll(".menu-link")).forEach(function(el) {
        el.addEventListener('click',function (e){
            bsOffcanvas.hide();
        });
    });
});