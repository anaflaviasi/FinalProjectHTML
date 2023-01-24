let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("img")
    max = images.length;


    function nextImage(){

        images[currentImageIndex].classList.remove("Selected")

        currentImageIndex++
        
        if(currentImageIndex >= max )
            currentImageIndex = 0

        images[currentImageIndex].classList.add("Selected")

    }

    function start() {
        
    }


    window.addEventListener("load", start)