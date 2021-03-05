var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    //所有图片隐藏，所有dot去掉active类属性
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    slideIndex = slideIndex % slides.length;
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    setTimeout(showSlides, 2000); // 切换时间为 2 秒
}