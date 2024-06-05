  // this showImage function will only display an image that is being clicked on by user 
  function showImage(imageUrl) {
    const overlay = document.getElementById('background-overlay');
    overlay.style.color='white'
    overlay.style.backgroundImage = `url(./images/${imageUrl})`
    
    overlay.style.display = 'block';
    
    
    
   
    //
}


 //this hideImage function it helps to hide  image that has been clicked on to be removed on a background
 function hideImage(){
    const overlay = document.getElementById('background-overlay')
    overlay.style.display = 'none';
    //
}