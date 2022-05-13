let addbutton = document.getElementById('result')
let input = document.getElementById('get')
let todo = document.getElementById('ToDo')
let elems = document.getElementById('list')
addbutton.onmouseover = function(){
    this.setAttribute('class', 'OnButton')
}
addbutton.onmouseout = function(){
    this.setAttribute('class', 'OffButton')
}
addbutton.onclick = function(){
    input = document.getElementById('get')
    let value = input.value
    if(value){
        newElem(value)
    }
    else{
        alert('Field cannot be empty!')
    }
}
function newElem(value){
    input.value = ''
    if(document.getElementsByTagName('ul') !== null){
        let list = document.createElement('ul')
        list.setAttribute('id', 'list')
        todo.append(list)
    }
    let list = document.getElementById('list')
    list.onclick = (e) => change(e)
    let li = document.createElement('li')
    let newbutton = document.createElement('b')
    newbutton.setAttribute('class', 'deleter')
    newbutton.innerHTML = '&#10006;'
    li.setAttribute('class', 'added')
    li.textContent = value
    li.append(newbutton)
    li.onmousedown = function(e){
        e.preventDefault()
    }
    list.append(li)
}
function change(e){
    if(e.target.tagName.toLowerCase() === 'ul'){
        return
    }
    else if(e.target.tagName.toLowerCase() === 'b'){
        e.target.parentElement.remove()
    }
    else{
        let setclass = e.target.getAttribute('class')
        if(setclass === 'added'){
            e.target.setAttribute('class', 'ready')
        }
        else{
            e.target.setAttribute('class', 'added')
        }
    }
}