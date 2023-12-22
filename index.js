
    let textInput = document.querySelector('.textInput')
    let dateInput = document.querySelector('.dateInput')

    const addBtn = document.querySelector(".add")
    let screen = ''
    
    let divContainer = document.querySelector('.divContainer')
    let container = document.querySelector('.outerContainer')
    let todoArray = []
    let savedItem = JSON.parse(localStorage.getItem("todoArray")) ;
if (savedItem) {
    todoArray = savedItem;

loopThrough(todoArray)
}



function loopThrough(todoArray) {

         for (let i = 0; i < todoArray.length; i++) {

                screen += `<div class="divContainer">
            <p class="name-para item">${todoArray[i].todoText}</p>
            <p class="date-para item">${todoArray[i].todoDate}</p>
            <button class="delete item">delete</button>
            </div>`
                container.innerHTML = screen;
            }

}

   

        addBtn.addEventListener("click",add)
    function add() {
        let nameInputValue = textInput.value
        let dateInputValue = dateInput.value


        if (textInput.value === '' || dateInput.value === '') {
            alert('empty field')
            return;
        }
        screen = ""
            todoArray.push({
                todoText: nameInputValue,
                todoDate: dateInputValue
            })

           console.log(todoArray);

            for (let i = 0; i < todoArray.length; i++) {

                screen += `<div class="divContainer">
            <p class="name-para item">${todoArray[i].todoText}</p>
            <p class="date-para item">${todoArray[i].todoDate}</p>
            <button class="delete item">delete</button>
            </div>`
                container.innerHTML = screen;
                localStorage.setItem("todoArray",JSON.stringify(todoArray))
            }
            
            textInput.value = ''
            dateInput.value = ''
            delTodoList()
        }
        
        
        function delTodoList() {
            let del = document.querySelectorAll('.delete')

            del.forEach((value, index) => {
                
                value.addEventListener('click', () => {
                    let savedItem = JSON.parse(localStorage.getItem("todoArray")) ;
                    todoArray = savedItem;
                    if (todoArray.length < 2) {
                        todoArray = []
                        value.parentElement.remove()
                        console.log(todoArray);
                        localStorage.setItem("todoArray",JSON.stringify(todoArray))
                        
                    }
                    else {
                        todoArray.splice(index, 1)
                        value.parentElement.remove()
                        
                        localStorage.setItem("todoArray",JSON.stringify(todoArray))
                        console.log("james");
                        console.log(todoArray);
                    }


                })
            })
        }
        
delTodoList()





            window.addEventListener('keydown',(e)=>{

        if (e.key === "Enter") {
            add()
        }
            })
