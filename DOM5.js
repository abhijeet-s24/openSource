let tasks=document.querySelectorAll('.task')
let output=document.getElementById('output')

tasks.forEach(function(task){
    task.addEventListener('click',function(){
        task.classList.toggle("done")
        updateCount()
    })
})
function updateCount(){
    doneItem=document.querySelectorAll('.task.done').length
    output.textContent="Completed Tasks: "+doneItem
}