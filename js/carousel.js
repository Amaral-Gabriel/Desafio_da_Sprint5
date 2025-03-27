
class Carousel {
    constructor (images, interval = 2000){
        this.images = images;
        this.intervalTime = interval;
        this.index = 0;
        this.timer = null;

        this.imageElement = document.getElementById("carouselImage");
        this.titleElement = document.getElementById("carouselTitle");
        this.linkElement = document.getElementById("carouselLink");

        this.prevButton = document.getElementById("prevButton");
        this.nextButton = document.getElementById("nextButton");

        this.prevButton.addEventListener("click", () => this.back());
        this.nextButton.addEventListener("click", () => this.next());

        this.updateCarousel();
        this.startAutoSlide();

        this.initSwipeEvents();


    }

    updateCarousel() {
        const currentItem = this.images[this.index];

        this.imageElement.src = currentItem.image;
        this.imageElement.alt = currentItem.title;
        this.titleElement.textContent = currentItem.title;
        this.linkElement.href = currentItem.url;
    }

    next() {
        // Lógica melhorada para navegação cíclica
        this.index = (this.index + 1) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }

    back() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }
            
    startAutoSlide() {
        this.timer = setInterval(() => this.next(), this.intervalTime);
    }

    resetTimer() {
        clearInterval(this.timer);
        this.startAutoSlide();
    }
};




const images = [
    {
        image: "assets/imagens/imagem_1.jpg",
        title: "Esta é a nova Ranger Ford 2022",
        url: "lancamento.html"
    },
    {
        image: "assets/imagens/imagem_2.jpg",
        title: "Nossa história",
        url: "lancamento.html"
    },
    {
        image: "assets/imagens/imagem_3.jpg",
        title: "Nova Ford Bronco Sport 2022",
        url: "lancamento.html"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    new Carousel(images);
});