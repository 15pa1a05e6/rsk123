var canon;
var barrel;
var heli;
var hit;
var trooper;
$(document)
	.ready(function(){
       canon=new Canon($(window).width()/2-70, $(window).height()-110,'canonbase.svg');
		canon.setup();
	
		barrel=new Barrel($(window).width()/2-9, $(window).height()-170,'barrel.svg');
		barrel.setup();
		
		 
		setInterval( function() 
    {
    	var m=(Math.floor(Math.random()*4))+1;
			console.log('helicopter0'+m+'.gif');
			heli=new Heli($(window).width()-100, 100,'helicopter0'+m+'.gif');
			heli.setup();
			hithandler = new Hithandler();
        hithandler.checkHits();
				trooper=new Trooper($(window).width()-150, 170,'trooper.svg',1);
        trooper.setup();
     }, 2000);
          
    
 	})
	
	.keydown(function (k) {
        if (k.which === 37) {// left arrow key 
            
            barrel.rotateLeft();
        }
        else if (k.which === 39) {// right arrow key 
            barrel.rotateRight();
      }
      else if(k.which === 32){
      	barrel.shoot();
      }
      k.preventDefault();
      });      
