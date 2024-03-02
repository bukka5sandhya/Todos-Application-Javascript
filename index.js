let todoItemsContainerEle = document.getElementById("todoItemsContainer");
let addTodoButtonEle = document.getElementById("addTodoButton");
let todoList = [{
    text:"Learn HTML"
    },
    {
        text:"Learn CSS"
    },
    {
        text:"Learn JavaScript"
    },
];
let todoCount = todoList.length;

function onAddStatusChange(checkboxId,labelId){
    let checkboxEle = document.getElementById(checkboxId);
    let labelEle = document.getElementById(labelId);

    labelEle.classList.toggle("checked");

}
function onDeleteTodoItem(todoId){
    let todoEle = document.getElementById(todoId);
    todoItemsContainerEle.removeChild(todoEle);

}
function createAndAppend(todo){
    let todoId = "todo"+todo.uniqueNo;
    let checkBoxId ="checkbox"+todo.uniqueNo;
    let labelId ="label"+todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoElement.id = todoId;
    todoItemsContainerEle.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.id=checkBoxId;
    inputElement.type="checkbox";

    inputElement.onclick = function(){
        onAddStatusChange(checkBoxId,labelId);
    }
    inputElement.classList.add("check-box-input");
    todoElement.appendChild(inputElement);

    let labelContainerEle = document.createElement("div");
    labelContainerEle.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainerEle);

    let labelElement = document.createElement("label");
    labelElement.id = labelId;
    labelElement.setAttribute("for","checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent  = todo.text;
    labelContainerEle.appendChild(labelElement);

    let deleteContainerEle = document.createElement("div");
    deleteContainerEle.classList.add("delete-icon-container");
    labelContainerEle.appendChild(deleteContainerEle);

    let deleteEle = document.createElement("i");
    deleteEle.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteEle.onclick = function(){
        onDeleteTodoItem(todoId);
    }
    deleteContainerEle.appendChild(deleteEle);


}

for(let eachTodo of todoList){
    createAndAppend(eachTodo);
}

function onAddTodo(){
    let userInputEle = document.getElementById("todoUserInput");
    let userInputValue = userInputEle.value ;

    if (userInputValue === ""){
        alert("Enter a Valid text");
        return;
    }
    todoCount = todoCount +1;

    let newTodo ={
        text: userInputValue,
        uniqueNo: todoCount
    };
    createAndAppend(newTodo);
    userInputEle.value = "";
}
addTodoButtonEle.onclick = function (){
    onAddTodo();
};