var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 60,
        stretch: 70,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


var dessert = document.getElementById("dessert");

console.log(dessert);

dessert.addEventListener("click", function() {
    Swal.fire({
        title: 'There is No Dessert Man!',
        text: 'Do you want to continue to see this beautiful page?',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
})


var img = document.getElementsByClassName("image");
console.log(img);


for (let i = 0; i < img.length; i++) {

    img[i].addEventListener("mouseenter", function() {

        img[i].classList.add("animate__wobble");

    })
    img[i].addEventListener("mouseleave", function() {

        img[i].classList.remove("animate__wobble");

    })
}