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
    if(!document.getElementsByTagName('ul').length){
        let list = document.createElement('ul')
        list.setAttribute('id', 'list')
        let getinputs = document.createElement('button')
        getinputs.textContent = 'Check All'
        getinputs.setAttribute('id', 'setallinputs')
        list.append(getinputs)
        todo.append(list)
    }
    let list = document.getElementById('list')
    list.onclick = (e) => change(e)
    let li = document.createElement('li')
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('class', 'check')
    let newbutton = document.createElement('b')
    newbutton.setAttribute('class', 'deleter')
    newbutton.innerHTML = '&#10006;'
    li.setAttribute('class', 'added')
    li.textContent = value
    li.append(check, newbutton)
    li.onmousedown = function(e){
        e.preventDefault()
    }
    list.append(li)
}
function change(e){
    if(e.target.id === 'setallinputs'){
        let checkedBoxes = document.querySelectorAll('input.check')
        checkedBoxes.forEach(e=>{
            e.setAttribute('checked', 'true')
        })
    }
    if(e.target.tagName.toLowerCase() === 'ul'){
        return
    }
    else if(e.target.tagName.toLowerCase() === 'b'){
        e.target.parentElement.remove()
    }
    else if(e.target.tagName.toLowerCase() === 'li'){
        let setclass = e.target.getAttribute('class')
        if(setclass === 'added'){
            e.target.setAttribute('class', 'ready')
        }
        else{
            e.target.setAttribute('class', 'added')
        }
    }
    let checkedBoxes = document.querySelectorAll('input:checked').length
        if(checkedBoxes && !document.getElementById('setreadystate') && !document.getElementById('deleteall') && !document.getElementById('deleteallinputs')){
            let button = document.createElement('button')
                button.textContent = 'Set ready'
                button.setAttribute('id', 'setreadystate')
                document.getElementById('list').prepend(button)
                button.onclick = function(){
                    document.querySelectorAll('input:checked').forEach(e=>{
                        e.parentElement.setAttribute('class', 'ready')
                    })
                }
            let doc = document.createElement('button')
            doc.textContent = 'Unset All'
            doc.setAttribute('id', 'deleteallinputs')
            doc.onclick = function(){
                let checkedBoxes = document.querySelectorAll('input.check')
                checkedBoxes.forEach(e=>{
                    e.removeAttribute('checked')
                })
            }
            document.getElementById('list').prepend(doc)
            let deletebutton = document.createElement('button')
                deletebutton.textContent = 'Delete All'
                deletebutton.setAttribute('id', 'deleteall')
                document.getElementById('list').prepend(deletebutton)
                deletebutton.onclick = function(){
                    document.querySelectorAll('input:checked').forEach(e=>{
                        e.parentElement.remove()
                    })}
        }
        else if(!checkedBoxes && document.getElementById('setreadystate') && document.getElementById('deleteall') && document.getElementById('deleteallinputs')){
            document.getElementById('setreadystate').remove()
            document.getElementById('deleteall').remove()
            document.getElementById('deleteallinputs').remove()
        }
    
}
