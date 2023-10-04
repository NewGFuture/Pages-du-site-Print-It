const slide = ["./assets/images/slideshow/slide1.jpg", "./assets/images/slideshow/slide2.jpg", "./assets/images/slideshow/slide3.jpg", "./assets/images/slideshow/slide4.png"]
let numero = 0;
var dots=document.querySelector('.dots');

//* Next and previous Arrows *//

const prev = document.querySelector (".prev");

prev.addEventListener("click", () => { ChangeSlide(-1);
    console.log(prev);
});

const next = document.querySelector (".next"); 

next.addEventListener("click", () => { ChangeSlide(1);
    console.log(next);
});



ChangeSlide(0);
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero]; 

    
       dots.innerHTML="";
       for (i = 0; i < slide.length; i++) {
        let span  = document.createElement('span'); 
        span.classList.add("dot");
        if (i == numero){
            dots.appendChild(span).classList.add("dot_selected");
        } else { 
            dots.appendChild(span);
        }
    } 
    

}
