var ulListElement = document.querySelector("#listUL"); // Use # to take any Element by ID.
var inputElement = document.createElement("input");
var buttonElement = document.createElement("input");
var divBox = document.getElementById("box");


    inputElement.setAttribute("type", "text");

    buttonElement.setAttribute("type", "button");
    buttonElement.setAttribute("value", "Add Task");
    buttonElement.onclick = function (){
                                    // console.log();
                                    addTask(inputElement.value);
                                }

    divBox.appendChild(inputElement);
    divBox.appendChild(buttonElement);

// var taskArray = [
//     'Canada',
//     'United States'
// ];

var taskArray = JSON.parse(localStorage.getItem('tasksItems')) || [];


function renderTasks(){

    ulListElement.innerHTML = '';

    taskArray.forEach(function task(item, index) {
        
        console.log(index, item);
        
        var Element     = document.createElement("li");
        var textElement = document.createTextNode(item);
        Element.appendChild(textElement);

        var linkRemove = document.createElement('a');
        var removeText = document.createTextNode(" Remove");
        linkRemove.appendChild(removeText);
        
        linkRemove.setAttribute('href', '#');
        linkRemove.setAttribute('onclick', 'deleteTask(' + index + ')'); 

        Element.appendChild(linkRemove);

        // Add to list
        ulListElement.appendChild(Element);

    });
}

renderTasks();

function addTask(task){

    if ( task == "" ){
        alert("Please, fill the name of the task");
    }else{
        // Add to array
        taskArray.push(task);
        inputElement.value = '';
        renderTasks();
        saveToStorage()
    }
}

function deleteTask(index){
    taskArray.splice(index,1);
    renderTasks();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('tasksItems', JSON.stringify(taskArray));
}







