let $show = document.querySelector('.show')


// A function that goes to the start of the show
let setFirstSlide = () => {

    //finds first element
    let $first = document.querySelector('.slide:first-child')
   
    //adds a class to it
    $first.classList.add('current')
}

// A function that goes to the end of the show
let setLastSlide = () => {

}

// Remove ".current" from all ".slide"
let unsetSlides = () => {

}

// Previous slide
let prevSlide = () => {

}

// Next slide
let nextSlide = () => {

    //1. locate the current slide
    let $curr = document.querySelector('.current')

    //2. Remove the current class
    $curr.classList.remove('current')

    //3. find the next slide
    let $next = $curr.nextElementSibling

    if ($next != null){
        //there is no next slide
        //4. If it exists, add the current class
        $next.classList.add('current')
    } else {
        //5. if it doesn't exist, go back to the beginning 
        setFirstSlide()
    } 
        

}

// When the interface has fully loaded...
let windowLoaded = () => {

    //check if there's a hash set, if so start at that slide
    //window.location.hash


    //else, use the first slide
   //setup the first slide
   setFirstSlide()


   //add all the event listeners 
   document.querySelector('#next').addEventListener('click', nextSlide)


}

window.addEventListener('load', windowLoaded)