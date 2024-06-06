function stringtransform(names){
    let reversed=''
    let  ASCINUMBERS=''
    let bothreverseAndASCI=''

  
    if(names.length%3===0){                    // if the string is divisible by 3 
       
          for(let i=names.length -1;i>=0;i--){          // this is a loop of reversing if a string i divisible by three
     reversed +=names[i]                                // it will return a reversed string 
          }
    }


      if(names.length%5===0){      //if a string provided is divisibe by five it will make an  ASCII code.
        
         for(let i=0;i<names.length;i++){
        ASCINUMBERS +=names[i].codePointAt(0)
         }
          
      }


        if(names.length%15===0){                      // it checks if string is diviible by both 3 and 5 a
        
          for(let i=names.length -1;i>=0;i--){         // this will first reverse a string 
          
            bothreverseAndASCI +=names.codePointAt(i)   // after reversing a string it will perform Asci operation
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
  let isName='gakizagakizagak'
   console.log(stringtransform(isName))