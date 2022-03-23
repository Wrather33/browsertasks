
let ids = ['backspace', 'tab', 'Caps', 'Enter', 'Shift', 'Shift2', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Ctrl']
let words =  [['`', `~`], ['1', `!`], ['2', `@`], ['3', `#`], ['4', `$`], ['5', `%`], ['6', `^`], ['7', '&'], ['8', `*`], ['9', `(`], ['0', `)`], ['-', `_`], ['=', `+`], ['<----<br>Backspace'], ['Tab<br><---->'], ['Q', 'Й'], ['W', 'Ц'], ['E', 'У'], ['R', 'К'], ['T', 'Е'], ['Y', 'Н'], ['U', 'Г'], ['I', 'Ш'],
['O', 'Щ'], ['P', 'З'], [['{ ['], 'Х'], [['} ]'], 'Ъ'], ['|', '/'], ['Caps Lock<br>A'], ['A', 'Ф'], ['S', 'Ы'], ['D', 'В'], ['F', 'А'], ['G', 'П'], ['H', 'Р'],
['J', 'О'], ['K', 'Л'], ['L', 'Д'], [[': ;'], 'Ж'], [['\" \''], 'Э'], ['Enter<br>----|'], ['Shift<br><---'], 
['Z', 'Я'], ['X', 'Ч'], ['C', 'С'], ['V', 'М'], ['B', 'И'], ['N', 'Т'], ['M', 'Ь'], [['< ,'], 'Б'], [['> .'], 'Ю'],['?', '/'], ['Shift<br>--->'], ['Ctrl'], ['Win'], ['Alt'], ['Space'], ['Alt'], ['Win'],['Ctrl']]
let key = document.getElementById('keyboard')
let put = document.getElementById('result')
let clr = document.getElementById('clean')
document.body.addEventListener('keydown', click, false)
function click(e) {
    if(e.keyCode === 16 && e.altKey){
        alert('ok')
    }
}


clr.onclick = function(){
put.value = ''
}
let fill = function(){
let c = 0;
for(let i=0; i<words.length; i++){
    if(words[i].length === 1){
        let b = document.createElement('button')
        b.setAttribute('id', ids[c])
        b.innerHTML = words[i]
        b.addEventListener('click', write)
        c++
        key.append(b)
}
else{
    let b = document.createElement('button')
    b.setAttribute('id','symbol')
    b.innerHTML = `${words[i][1]}<br>${words[i][0]}`
    b.addEventListener('click', write)
    key.append(b)
}

}
}
()

function write(e){
    let val = e.target.textContent.slice('')
    let targ = e.target.getAttribute('id')
    if(targ === 'symbol'){
    put.value += val[1]
    }
}