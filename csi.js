document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("addTaskBtn");

  addTaskBtn.addEventListener("click", () => {
    const name = document.getElementById("taskName").value.trim();
    const duration = document.getElementById("taskDuration").value.trim();
    const dateTime = document.getElementById("taskDateTime").value;

    if (!name || !duration || !dateTime) {
      alert("Please fill in all fields");
      return;
    }

    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.setAttribute("data-time", dateTime);

    taskCard.innerHTML = `
      <div class="task-title">${name}</div>
      <div><strong>Duration:</strong> ${duration} min</div>
      <div><strong>Scheduled:</strong> ${new Date(
        dateTime
      ).toLocaleString()}</div>
      <div class="task-footer">
        <select class="status-select">
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <select class="priority-select">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button class="complete-btn">Complete</button>
        <button class="skip-btn">Skip</button>
      </div>
    `;

    document.querySelector(".task-column").appendChild(taskCard);

    document.getElementById("taskName").value = "";
    document.getElementById("taskDuration").value = "";
    document.getElementById("taskDateTime").value = "";
  });
  // ...............................................................
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-btn")) {
      const card = e.target.closest(".task-card");
      card.querySelector(".status-select").value = "Done";
      card.style.opacity = "0.6";
    }
    //......................................................................
    if (e.target.classList.contains("skip-btn")) {
      const card = e.target.closest(".task-card");
      card.remove();
    }
  });
});
