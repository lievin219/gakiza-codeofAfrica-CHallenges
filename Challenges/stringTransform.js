function stringtransform(strings){
    let reversed=''
    let  ASCINUMBERS=''
    let bothreverseAndASCI=''

  
    if(strings.length%3===0){                    // if the string is divisible by 3 
       
          for(let i=strings.length -1;i>=0;i--){          // this is a loop of reversing if a string i divisible by three
     reversed +=strings[i]                                // it will return a reversed string 
          }
    }


      if(strings.length%5===0){      //if a string provided is divisibe by five it will make an  ASCII code.
        
         for(let i=0;i<strings.length;i++){
        ASCINUMBERS +=strings[i].codePointAt(0)
         }
          
      }


        if(strings.length%15===0){                      // it checks if string is diviible by both 3 and 5 a
        
          for(let i=strings.length -1;i>=0;i--){         // this will first reverse a string 
          
            bothreverseAndASCI +=strings.codePointAt(i)   // after reversing a string it will perform Asci operation
          }
       }


          if(bothreverseAndASCI){
             return bothreverseAndASCI
          } else if(reversed){
             return reversed
          } else if(ASCINUMBERS){
             return ASCINUMBERS
          }
          
           return names // if none of conditions occur it will return a name as it is 
       
 }
  let isName='gakasgakasgakas'
   console.log(stringtransform(isName))// calling our function to check it's functionality