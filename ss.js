
window.addEventListener('load',()=>{

    const sound=document.querySelectorAll('.sound');
    const pads=document.querySelectorAll('.pads div');
    const visual=document.querySelector('.visual');
    const colors=['#60d394','#d36060','#c060d3','#d3d160'];


    pads.forEach((pad,index) => {
      pad.addEventListener('click',function() {
        sound[index].currentTime=0;
        sound[index].play();
        bubble(index);
      });

      const bubble = (index) =>{
        const bubbles = document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation='jump 1s ease';
        bubbles.addEventListener('animationend',function(){
          visual.removeChid(bubbles);
        });
      };
    });




});
