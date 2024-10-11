function newTask() {

    let taskText = document.getElementById("newTaskInput").value;
    let category = document.getElementById("categoryDropdown").value;

    if (taskText === "" || category === "") {
        alert("Both task and category are required!");
        return;
    }


    let li = document.createElement("li");


    let categorySpan = document.createElement("span");
    categorySpan.className = "category";
    categorySpan.textContent = `[${category}] `;
    li.appendChild(categorySpan);


    let taskNode = document.createTextNode(taskText);
    li.appendChild(taskNode);


    let closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.className = "close";
    closeBtn.onclick = function () {
        this.parentElement.style.display = "none";
    };
    li.appendChild(closeBtn);


    li.onclick = function (e) {

        if (e.target.className !== 'close') {
            li.classList.toggle("completed");
        }
        console.log(li);
    };

    // Append to the list
    document.getElementById("todoList").appendChild(li);

    //clear the input and dropdown
    document.getElementById("newTaskInput").value = "";
    document.getElementById("categoryDropdown").value = "";
}
