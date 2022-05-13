(function get(){
    let sub = document.getElementById('submit')
    let input = document.getElementById('get')
    let img = document.querySelector('#gif > img')
    let getfile = document.getElementById('getfile')
    sub.onclick = function(){
    let tag = input.value
    let opts = tag.split(' ')
    input.value = ''
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=R0GPJboG4KOQcUEAvtwSmgSy7Le1joZ9&tag=${opts[0]}&rating=${opts[1]}`).then(r=> {return r.json()})
    .then(d=> {
        console.log(d)
        img.src = d.data.images.original.url}
    ).catch(e=>alert(e))
    }
    getfile.onchange = function(){
       let type = getfile.files[0].type
       if(type === 'image/gif'){
           let gettag = prompt('Tags?')
           let file = getfile.files[0]
           if(gettag){
               fetch("https://upload.giphy.com/v1/gifs", {
               method: "POST",
               body: new URLSearchParams({
                   api_key: "R0GPJboG4KOQcUEAvtwSmgSy7Le1joZ9",
                   source_image_url: file,
                   tags: gettag
                })    
            }).then((response) => {
                alert(`status: ${response}`);
            }).catch(e => alert(e));
       }}
       else{
           alert('Wrong type!')
       }
    }

})()