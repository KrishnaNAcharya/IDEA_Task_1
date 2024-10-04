function addTask() {
    var task = document.getElementById("taskInput").value;
    if (task === "") {
        alert("Please enter a task");
    } else {
        var li = document.createElement("li");
        li.innerHTML = '<input type="checkbox" onclick="updateCount()">' + task;
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
