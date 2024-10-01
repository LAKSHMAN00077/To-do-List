const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector('input[name="clear"]');
const message = document.querySelector(".message p")
const searchForm = document.querySelector(".search");

function taskCounter(){
    const count = tasks.children.length;
    message.textContent = `You have ${count} pending tasks`
}
taskCounter();

addForm.addEventListener("submit", event =>{
    event.preventDefault();
    const item = addForm.task.value.trim();
    if(item.length){
        tasks.innerHTML += `
                        <li>
                            <span>${item}</span>
                            <i class="bi bi-trash-fill delete"></i>
                        </li>`
    }
    addForm.reset();
    taskCounter();
})

tasks.addEventListener("click",event=>{
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
    taskCounter();
})

clearAll.addEventListener("click",event=>{
    const items = tasks.querySelectorAll("li");
    items.forEach(item => item.remove());
    taskCounter();
})

function searchKey(key){
    const trimArray = Array.from(tasks.children);
    trimArray.forEach(task => {
        if(task.textContent.toLowerCase().includes(key)){
            task.classList.remove("hide");
        }
        else{
            task.classList.add("hide");
        }
    })
}

searchForm.addEventListener("keyup",event =>{
    const key = searchForm.task.value.trim().toLowerCase();
    searchKey(key);
})

searchForm.addEventListener("click",event =>{
    if(event.target.classList.contains("reset")){
        searchForm.reset();
        const key = searchForm.task.value.trim().toLowerCase();
        searchKey(key);
    }
})