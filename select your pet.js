let petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};

let petSelectEl = document.getElementById("petSelect");
let petImgEl = document.getElementById("petImg");

petImgEl.src = petsImageUrls.dog;

petSelectEl.addEventListener("change", function(event) {
    if (event.target.value === "Dog") {
        petImgEl.src = petsImageUrls.dog;
    } else if (event.target.value === "Cat") {
        petImgEl.src = petsImageUrls.cat;
    } else if (event.target.value === "Parrot") {
        petImgEl.src = petsImageUrls.parrot;
    } else if (event.target.value === "Spider") {
        petImgEl.src = petsImageUrls.spider;
    } else if (event.target.value === "Rabbit") {
        petImgEl.src = petsImageUrls.rabbit;
    }
});