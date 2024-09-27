Shery.imageEffect(".back", {
    style: 2,
    config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.182,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.066376561504168},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.66,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]}},
    gooey:true,
  });
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });


var elems = document.querySelectorAll(".elem")

elems.forEach(function(elem){

  var h1s = elem.querySelectorAll("h1")
  var index = 0
  let anime = false;
  document.querySelector(".main").addEventListener("click",function(){
  
    if(!anime){
      anime=true
      gsap.to(h1s[index],{
      top:"-=100%",
      ease:Power1,
      duration:1,
      onComplete:function(){
        gsap.set(this._targets[0], {top: "100%"})
        anime=false
      }                                    
    })
   index === h1s.length -1 ? index = 0 : index++
  
    gsap.to(h1s[index],{
      top:"-=100%",
      ease:Expo.easeInOut,
      duration:1,
    })
  
    }
  
  })

})

