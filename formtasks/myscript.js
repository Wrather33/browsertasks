let wrap = document.getElementById('wrap')
let form = document.getElementById('form')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let age = document.getElementById('age')
let nname = document.getElementById('nname')
let email = document.getElementById('email')
let pass = document.getElementById('password')
let num = document.getElementById('phone')
let getn = document.getElementById('getnname')
let getpass = document.getElementById('getpass')
let login = document.getElementById('log')
let db;
let req = indexedDB.open('Users', 3)
req.onupgradeneeded = function(){
    db = req.result
    if(!db.objectStoreNames.contains('person')){
      db.createObjectStore('person', {autoIncrement: true})
    }
 }
req.onsuccess = function(e) {
    db = e.target.result;
    let transaction = db.transaction(["person"],"readwrite");
    let store = transaction.objectStore("person");
    form.onsubmit = function(){
        alert('User added!')
        let transaction = db.transaction(["person"],"readwrite");
        let store = transaction.objectStore("person");
        let obj = {
            name : `${fname.value}:${lname.value}`,
            age: age.value,
            nickname: nname.value,
            email: email.value,
            pass: pass.value,
            phone: num.value
        }
        store.add(obj)
  }
  let n = prompt('Ник?')
  let p = prompt('пароль?')
    store.openCursor().onsuccess = function(event) {
    var cursor = event.target.result
    if(cursor){
        if(cursor.value.pass === p && cursor.value.nickname === n){
          alert(cursor.value.name)
        }
        else{
          cursor.continue()
        }
      }
    }
  
    }
  
  


  