/* function to chnage status of completion or incompletion */

if (localStorage.getItem("login") === null) {
    window.location.href = "index.html";
}
todolist = JSON.parse(localStorage.getItem("todos"));
if (todolist === null) {
    todolist = []
}
else {
    loadtask();
}
function loadtask() {

    for (i = 0; i < todolist.length; i++) {
        taskname = todolist[i];
        tasklist = document.getElementById("todolist");
        var list = document.createElement("li");
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.className = "checkboxe";
        /*checkbox change event*/
        checkbox.addEventListener('click', function () {
            if (this.checked) {
                checktasks();
            }
            else {
                checktasks();
            }

        });
        const text = document.createElement("p");
        text.innerHTML = taskname;
        text.classname = "taskname";
        list.appendChild(checkbox);
        list.appendChild(text);
        tasklist.appendChild(list);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.addEventListener('click', function () {
            todolist = JSON.parse(localStorage.getItem("todos"));

            var div = this.parentElement;
            const collection = div.children;
            var strtodel = "";
            for (i = 0; i < collection.length; i++) {
                if (collection[i].className === "taskname") {
                    strtodel = collection[i].innerHTML;
                }
            }
            todolist = JSON.parse(localStorage.getItem("todos"));
            if (todolist === null) {
                todolist = []
            }
            const ind = todolist.indexOf(strtodel);

            todolist.splice(ind, 1);
            localStorage.setItem("todos", JSON.stringify(todolist));
            console.log("Iamclicked");

            div.style.display = "none";

        });
        span.appendChild(txt);
        /*event to remove tasks
        */
        
        list.appendChild(span);
        document.getElementById("inputask").value = "";

    }

}
function checktasks() {
    var checkedBoxes = document.querySelectorAll('li');
    var i = 0;
    for (i = 0; i < checkedBoxes.length; i++) {

        var checkbox = checkedBoxes[i].getElementsByTagName("input");
        if (checkbox[0].checked) {
            checkedBoxes[i].className = "checked";
        }
        else {
            checkedBoxes[i].classList.remove("checked");
        }
    }
}

/*function to add a item*/
function addtask() {
    taskname = document.getElementById("inputask").value;
    if (taskname === "") {
        alert("Task Cannot be Empty");
    }
    else {
        tasklist = document.getElementById("todolist");
        var list = document.createElement("li");
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.className = "checkboxe";
        /*checkbox change event*/
        checkbox.addEventListener('click', function () {
            if (this.checked) {
                checktasks();
            }
            else {
                checktasks();
            }

        });
        const text = document.createElement("p");
        text.innerHTML = taskname;
        text.classname = "taskname";
        list.appendChild(checkbox);
        list.appendChild(text);
        tasklist.appendChild(list);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        /*event to remove tasks
        */
        span.addEventListener('click', function () {
            todolist = JSON.parse(localStorage.getItem("todos"));
            
            var div = this.parentElement;
            const collection = div.children;
            var strtodel = "";
            for (i = 0; i < collection.length; i++) {
                if (collection[i].className === "taskname") {
                    strtodel = collection[i].innerHTML;
                }
            }
            todolist = JSON.parse(localStorage.getItem("todos"));
            if (todolist === null) {
                todolist = []
            }
            const ind = todolist.indexOf(strtodel);

            todolist.splice(ind, 1);
            localStorage.setItem("todos", JSON.stringify(todolist));
            console.log("Iamclicked");
 
            div.style.display = "none";

        });
        list.appendChild(span);
        document.getElementById("inputask").value = "";
        
        todolist.push(taskname);
        localStorage.setItem("todos", JSON.stringify(todolist));
    }
    
    

    

}

