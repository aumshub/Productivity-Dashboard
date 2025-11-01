console.log("JS Running...");

function openFeatures(){
    
const allElems = document.querySelectorAll('.elem');
const fullElemBack = document.querySelectorAll('.fullElem .back');

allElems.forEach((elem)=>{
    // console.log(elem)

    elem.addEventListener("click",()=>{
        // console.log(elem.id)

       // console.log(document.querySelectorAll('.fullElem')[0]) // returns a NodeList, which is array-like (it’s not an actual array, but it has indexed elements and a length property).
        document.querySelectorAll('.fullElem')[elem.id].style.display = 'block'
    })


})


fullElemBack.forEach((back,index)=>{
    back.addEventListener("click",()=>{
        document.querySelectorAll('.fullElem')[back.id].style.display = 'none'
    })
})
}

openFeatures();

const addTaskForm = document.querySelector('.addTask form');
const addTaskInput = document.querySelector('.addTask form input');
const addTaskTextarea = document.querySelector('.addTask form textarea');
const addTaskCheckbox = document.querySelector('.addTask form #check-box')


addTaskForm.addEventListener("submit",function(e){
    // console.log(e)
    e.preventDefault();
    console.log(addTaskInput.value)
    console.log(addTaskTextarea.value)
    console.log(addTaskCheckbox.checked)
})