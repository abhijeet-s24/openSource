let btn=document.getElementById('addBtn')
let d=document.getElementById('comment')

btn.addEventListener('click',function(){
    let p =document.createElement("p")
    p.textContent="New Comment Added!"
    d.append(p)
})