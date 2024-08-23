let userInput = document.getElementById('input-text')
let addButton = document.querySelector('.add-btn')
let task = document.querySelector('.tasks')
let removeAll = document.querySelector('.remove-all')
let items =[]



addButton.addEventListener('click',function(){
   adding()
})


function adding (){

    let  newItem = document.createElement('li')
    newItem.textContent = userInput.value

    let doneBtn = document.createElement('button')
    doneBtn.textContent = 'completed'

    newItem.appendChild(doneBtn)

    task.appendChild(newItem)

    items.push(newItem.textContent)


    doneBtn.style.cursor = 'pointer'

    doneBtn.addEventListener('click',function(){
        newItem.remove()
    })


    // function to make the task when completed the problem is it doesn't target the pressed item 

    userInput.value=''
}



removeAll.addEventListener('click',function(){
    items = []
    task.innerHTML = ''
})


userInput.addEventListener('keydown', function(e) {
    if (e.code === "Enter" && userInput.value != '' ) {  //checks whether the pressed key is "Enter" and the text is not empty if so the adding function is invoked 
        adding(e);
    }
})

