//input field
let todoInput = document.querySelector('#todoInput')
let addToDoBtn = document.querySelector('#addTodo')
//html list
let listofToDos = document.querySelector('.list-group')
var toDos = document.getElementsByTagName("li");
//counter
let countDone = 0;
let counter = document.querySelector('#counter')
let done = document.querySelector('#done')
//search 
let searchInput = document.querySelector('#filter')
let searchBtn = document.querySelector('#search')
let clearSearchBtn = document.querySelector('#clear')
//clear all
let clearAll = document.querySelector('#delete')
//todo Obj
let todo = new ToDo(todoInput.value);
//initialize ToDo
function ToDo(title){
    this.title = title
}
//







//get Local Storage
const getDataStorage = () => {
    let temp;
    if (localStorage.getItem('data') === null) {
        temp = [];
    } else {
        temp = JSON.parse(localStorage.getItem('data'))
    }
    return temp;
}
//load Local Storage
document.addEventListener('DOMContentLoaded', () => {
    
    let temp = getDataStorage();
    temp.forEach(todo.addToDo)   
    toDoCounter()
})
//

//set Local Storage
ToDo.prototype.addToStorage = function(title){
    let temp = getDataStorage();
    temp.push(title);
    localStorage.setItem('data',JSON.stringify(temp))
}
//



//get new To Do from input
addToDoBtn.addEventListener('click', e => {
    e.preventDefault();
    todo.addToDo(todoInput.value)
    todo.addToStorage(todoInput.value)
    toDoCounter()
    
});
//



//set To Do in HTML
ToDo.prototype.addToDo = function(todo_title){
    let li = x('li');
    li.className = "list-group-item d-flex justify-content-between text-dark";
    let title = document.createTextNode(todo_title);
    let a = x('a');
    a.href = '#';
    a.className = "delete-item";
    let i = x('i');
    i.className = "fa fa-remove";
    a.appendChild(i)
    li.appendChild(title)
    li.appendChild(a)
    return listofToDos.appendChild(li)
};
//



//create HTML-element function
const x = t => document.createElement(t)
//





//search to do
searchBtn.addEventListener('click',function(){
    var innerToDo
    for(i=0;i<toDos.length;i++){
        innerToDo=toDos[i].innerText;
        if(searchInput.value === innerToDo){
            toDos[i].style.backgroundColor="yellow"
        }else{
            toDos[i].style.backgroundColor="white"
        }
    }
})
//clear search
clearSearchBtn.addEventListener('click',function(event){
    for(i=0;i<toDos.length;i++){
        toDos[i].style.backgroundColor="white"
    }
})





//remove item
listofToDos.addEventListener('click',function(event){
    if(event.target.className === "fa fa-remove"){
        
        //remove it from localStorage first
        var li = event.target.closest('li') //get current li
        var tempArr = Array.from(listofToDos.children); //make array out of current HTML list => before removing in html!!!
        var index = tempArr.indexOf(li);//get index position of current li
        let todos = getDataStorage();//get localStorage in temp array
        todos.splice(index,1)//remove item in temp array with index from li
        localStorage.setItem('data',JSON.stringify(todos));//reset local storage
       // remove it from html
        event.target.parentElement.parentElement.remove();
        //count finnished items
        countDone++
        toDoCounter()
       
       

    }
});

// remove all
const removeAllTasks = () =>{
    listofToDos.innerHTML = ""
    localStorage.clear()
    //reset counter
    counter.innerText = `Amount of To Dos:`
    done.innerText = `Amount of Finnished To Dos:`
}
clearAll.addEventListener('click', removeAllTasks);


//ToDoCounter
const toDoCounter = () =>{
    let counting = JSON.parse(localStorage.getItem('data'))
counting = counting.length
counter.innerText = `Amount of To Dos: ${counting}`
done.innerText = `Amount of Finnished To Dos: ${countDone}`
}

