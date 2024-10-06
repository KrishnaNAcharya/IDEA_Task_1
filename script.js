// script.js
function addTask() {
    var task = document.getElementById("taskInput").value;
    if (task === "") {
        alert("Please enter a task");
    } else {
        var li = document.createElement("li");
        li.className = "bg-[#DBBEA1]/10 p-2 rounded-lg flex items-center hover:bg-[#DBBEA1]/20 transition-colors";

        li.innerHTML = '<input type="checkbox" onclick="updateCount()" class="mr-2 cursor-pointer"> ' + task +
                       '<button onclick="deleteTask(this)" class="ml-auto bg-[#FF6B8B] px-2 py-1 rounded text-[#2A1D1E]">Delete</button>';

        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";
        updateCount();
    }
}

function updateCount() {
    var tasks = document.querySelectorAll('#taskList input[type="checkbox"]');
    var completed = 0;
    var incomplete = 0;

    tasks.forEach(function(task) {
        if (task.checked) {
            completed++;
        } else {
            incomplete++;
        }
    });

    document.getElementById("completed").innerText = completed;
    document.getElementById("incomplete").innerText = incomplete;
}

function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
    updateCount();
}
