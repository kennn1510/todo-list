import Task from "./create-task.js";

export default function addTask() {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector(".add-task");
  const form = document.querySelector("#task-form");

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  form.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;

    const task = new Task(title);
  });
}
