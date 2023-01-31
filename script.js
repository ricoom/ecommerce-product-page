let img_selector=document.querySelectorAll('.img-control')
let img_list=document.querySelectorAll('.image-list')
let img_slide=document.querySelectorAll('.image-slide')
let open_btn=document.getElementById('open-btn')
let close_btn=document.getElementById('close-btn')
let menu=document.getElementById('menu')

const nextBtn=document.getElementById('next-btn')
let i=0;
function showImage(imageName){
img_selector.forEach(selector=>{
    //remove the border
    selector.classList.remove('active')

    if(selector.innerHTML.includes(imageName)){
        //add a border for active thumb-nail
        selector.classList.add('active')

        for (let i = 0; i < img_list.length; i++) {
            if(img_list[i].innerHTML.includes(imageName)){
img_list[i].classList.remove('hidden')


console.log(i)

        }else{
            img_list[i].classList.add('hidden')

        }
            
        }
  
    }
})
        

}

      
 open_btn.addEventListener('click',()=>{
menu.style.display='block'
 }) 
close_btn.addEventListener('click',()=>{
menu.style.display='none'
 }) 
function showNext() {
    
    if(i<3){
         img_slide[i].classList.remove('show');

    i++
      console.log(i)
     img_slide[i].classList.add('show');
      console.log(img_slide[i])

    }
        

  
}
function showprev() {
  
 if(i<3){
img_slide[i].classList.remove('show');

    i++
      console.log(i)
     img_slide[i].classList.add('show');
      console.log(img_slide[i])
      
 }
  
    
         

        
}
