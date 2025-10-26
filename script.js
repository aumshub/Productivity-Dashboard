console.log("JS Running...");

const allElems = document.querySelectorAll('.elem');

allElems.forEach((elem)=>{
    // console.log(elem)

    elem.addEventListener("click",()=>{
        // console.log(elem.id)

       // console.log(document.querySelectorAll('.fullElem')[0]) // returns a NodeList, which is array-like (it’s not an actual array, but it has indexed elements and a length property).
        document.querySelectorAll('.fullElem')[elem.id].style.display = 'block'
    })


})