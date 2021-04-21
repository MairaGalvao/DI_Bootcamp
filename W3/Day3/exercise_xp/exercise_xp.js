function myMove() {
    let elem = document.getElementById("animate");   
    let position = 0;
    let id = setInterval(theMove, 5);
    
    function theMove() {
      if (position == 350) {
        clearInterval(id); 
      } else {
        position++; 
        elem.style.left = position + 'px'; 
    }
    }
  }

 