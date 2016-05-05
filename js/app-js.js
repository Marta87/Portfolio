document.addEventListener("DOMContentLoaded", function () {


    var next = document.getElementById("prevPicture");
    var prev = document.getElementById("nextPicture");
    var galeriLi = document.querySelectorAll('.mocup_img li');
    var imgIndex = 0;
    console.log(next)
    galeriLi[imgIndex].classList.add("visible");

    next.addEventListener('click', function (event) {

        galeriLi[imgIndex].classList.remove("visible");
        imgIndex++;
        if (imgIndex >= galeriLi.length) {
            imgIndex = 0;
        }
        galeriLi[imgIndex].classList.add("visible");
    });


    prev.addEventListener('click', function (event) {
        galeriLi[imgIndex].classList.remove("visible");
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = galeriLi.length - 1;
        }
        galeriLi[imgIndex].classList.add("visible");
    });

});