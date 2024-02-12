function slideshow(selector, duration) {
    var slides = document.querySelectorAll(selector);
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    setInterval(nextSlide, duration);
}

slideshow(".mainimg", 10000); 


// //for counters


const myNum = document.querySelectorAll('.num')
// console.log(myNum.innerText)
let speed = 200;

myNum.forEach( (myCount) => {
    
    
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    // console.log(target_count)
    
    let new_increment_num = Math.floor(target_count / speed);
    
    const updateNumber = () => {
        init_count +=  new_increment_num;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 5)
        }
    }
    
    updateNumber();
    
})
