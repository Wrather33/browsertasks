let wrap = document.getElementById('wrap')
let form = document.getElementById('form')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let age = document.getElementById('age')
let nname = document.getElementById('nname')
let email = document.getElementById('email')
let pass = document.getElementById('password')
let num = document.getElementById('phone')
let getn = document.getElementById('gn')
let getpass = document.getElementById('gpass')
let login = document.getElementById('log')
let sub = document.getElementById('sub')
let db;
let store;
let req = indexedDB.open('Users', 3)
req.onupgradeneeded = function(){
    db = req.result
    if(!db.objectStoreNames.contains('person')){
      let pass = db.createObjectStore('person', {autoIncrement: true})
      pass.createIndex('psw', 'pass');
    }
  }
  
req.onsuccess = function(e) {
  db = e.target.result
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

    sub.onclick = function(){
    let transaction = db.transaction(["person"],"readwrite");
    let store = transaction.objectStore("person");
    let value = getpass.value
    let psw = store.index("psw");
    let request = psw.get(value)
    request.onsuccess = function() {
      if (request.result) {
       alert(request.result.nickname)
      } else {
        alert('no')
      }
    };}}

  
  


  