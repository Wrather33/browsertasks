
const slides = [{
    img: 'https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_960_720.jpg',
    text: 'retro car'
},{
    img: 'https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_960_720.jpg',
    text: 'nice day'
},
{
    img: 'https://cdn.pixabay.com/photo/2021/12/08/15/53/traffic-6856075_960_720.jpg',
    text: 'night ride'
},
]
class Slider {
  constructor(slides, id, props) {
    this.slides = slides;
    this.id = id;
    this.props = props
    this.element = document.getElementById(this.id)
    this.index = 0
  }
  createbuttons(left, right, index, func, getimg, slides, props, para){
      left.setAttribute('class', 'left')
      left.innerHTML = '&#9668;'
      left.onclick = function(){
            if(index){index--}

        else if(props.loop){
            index = slides.length-1
        }
        func(index, getimg, slides, para, props, func)

    }
      right.setAttribute('class', 'right')
      right.innerHTML = '&#9658;'
      right.onclick = function(){
        if(index < slides.length-1){
            index++
        }
        else if(props.loop){
            index = 0
        }
        func(index, getimg, slides, para, props, func)
    }
      this.element.append(left, right)
  }

  setelem(index, elem, slides, p, props, func){
      let timerid;
      if(!props.navs){
          document.querySelector('div.left').style.display = 'none'
          document.querySelector('div.right').style.display = 'none'
      }
      if(props.navs){
        document.querySelector('div.left').style.display = ''
        document.querySelector('div.right').style.display = ''
      }
      if(props.auto){
          if(!props.delay){
            if(!timerid){
            timerid = setTimeout(() => {
                if(index < slides.length-1){
                    func(++index, elem, slides, p, props, func)
                }
                else{
                    index = -1,
                    func(++index, elem, slides, p, props, func)
                }
            }, 2000);
          }
        }
        else{
            timerid = setTimeout(() => {
                if(index < slides.length-1){
                    func(++index, elem, slides, p, props, func)
                }
                else{
                    index = -1,
                    func(++index, elem, slides, p, props, func)
                }
            }, delay);
          }
        }
        if(!props.auto && timerid){
            clearTimeout(timerid)
            func(index, elem, slides, p, props, func)
        }
      if(props.pags){
      p.innerHTML = `${slides[index].text}<br>${index+1}/${slides.length}<br><b data-idx='0' class="pag"></b> <b data-idx='1' class="pag"></b> <b data-idx='2' class="pag"></b>`
      let b = document.querySelectorAll('.wrap > b')
      for(let key of b){
          key.onclick = function(){
              func(+key.dataset.idx, elem, slides, p, props, func)
          }
      }
    }
      else{
        p.innerHTML = `${slides[index].text}<br>${index+1}/${slides.length}`
      }

      elem.src = slides[index].img
      let keys = document.querySelectorAll('input[type="checkbox"]')
      keys.forEach(key=>{
        key.addEventListener('click', (e)=>{
            props[key.value] = key.checked
            func(index, elem, slides, p, props, func)
  })})
  }
  build(){
      let img = document.createElement('img')
      let p = document.createElement('div')
      p.setAttribute('class', 'wrap')
      this.element.append(img, p)
      let para = document.querySelector('#slider > .wrap')
      let getimg = document.querySelector('#slider > img')
      let left = document.createElement('div')
      let right = document.createElement('div')
      this.createbuttons(left, right, this.index, this.setelem, getimg, this.slides, this.props, para)
      this.setelem(this.index, getimg, this.slides, para, this.props, this.setelem)
    }
}
let s = new Slider(
    slides,
    'slider',
    {
        loop: false, 
        navs: false,
        pags: false,
        auto: false,
        delay: '',
    })
s.build()