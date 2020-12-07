var canvas = new fabric.Canvas('myCanvas') ;

block_image_width = 30 ;
block_image_height = 30 ;

var player_x = 10 ;
var player_y = 10 ;

var player_object = "" ;

function player_update() {
         fabric.Image.fromURL("antman.jfif", function(Img){
            player_object = Img ;
            player_object.scaleToWidth(150) ;
            player_object.scaleToHeight(150) ;
            player_object.set({ 
              top:player_y , 
              left:player_x   
                        
            }) ;

            canvas.add(player_object) ;

  
         }) ;
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img ;
        block_image_object.scaleToWidth(block_image_width) ;
        block_image_object.scaleToHeight(block_image_height) ;
        block_image_object.set({ 
          top:player_y , 
          left:player_x   
                    
        }) ;

        canvas.add(block_image_object) ;


     }) ;
         
}

window.addEventListener("keydown" , my_keydown) ;
function my_keydown(e) {
        KeyPressed = e.keyCode ;
        console.log(KeyPressed) ;

        if(e.shiftKey == true && KeyPressed == '80')  {
          console.log("P and shift pressed together") ;
          block_image_width = block_image_width + 10  ;
          block_image_height = block_image_height + 10  ;
          document.getElementById("current_width").innerHTML = block_image_width ;
          document.getElementById("current_height").innerHTML = block_image_height ;
        } 

        if(e.shiftKey == true && KeyPressed == '77')  {
          console.log("M and shift pressed together") ;
          block_image_width = block_image_width  - 10  ;
          block_image_height = block_image_height - 10  ;
          document.getElementById("current_width").innerHTML = block_image_width ;
          document.getElementById("current_height").innerHTML = block_image_height ;
        } 

        if(KeyPressed == '38') {
          Up() ;
          console.log("Up") ;

        }

        if(KeyPressed == '40') {
          Down() ;
          console.log("Down") ;
          
        }

        if(KeyPressed == '37') {
          Left() ;
          console.log("Left") ;
          
        }

        if(KeyPressed == '39') {
          Right() ;
          console.log("Right") ;
          
        }

        if(KeyPressed == '65') {
          new_image('antman.jfif') ;
       
          console.log("a") ;
          
        }

        if(KeyPressed == '67') {
          new_image('captain america.jfif') ;
          console.log("c") ;
          
        }

        if(KeyPressed == '72') {
          new_image('hulk.jfif') ;
          console.log("h") ;
          
        }

        if(KeyPressed == '73') {
          new_image('iron man.jfif') ;
          console.log("i") ;
          
        }

          
        if(KeyPressed == '84') {
          new_image('thor.jfif') ;
          console.log("t") ;
          
        }

}