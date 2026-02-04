let input=document.getElementById('input');
let button=document.getElementById('addButton');
let addTask=document.getElementById('addTask');

function addtask(){
    const value=input.value.trim();

    if(value=="") return;

    let newTask=document.createElement('li');
    newTask.textContent=value;

    const completeButton=document.createElement('button');
    completeButton.textContent='✔';
    completeButton.addEventListener('click',()=>{
      newTask.classList.toggle("completed");
    })

    const cancelButton=document.createElement('button');
    cancelButton.textContent='❌';
    cancelButton.addEventListener('click',()=>{
      newTask.remove();
    })

    newTask.append(completeButton,cancelButton);

    addTask.appendChild(newTask);
    input.value = "";

}

button.addEventListener('click', addtask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});





