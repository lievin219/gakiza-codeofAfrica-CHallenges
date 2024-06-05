 function arraymapping(arra,target){
     let sum=0;
     let currentsum=0;
      for(let i=0;i<arra.length;i++){
          currentsum=currentsum+arra[i]
           while(currentsum>target && sum<=i){
            currentsum -=arra[sum]
            sum++
           }
          if(currentsum===target){
            return true
               }

      }
     
    
          return false
   



 }const numbers=[1,2,3,4,5]
  console.log(arraymapping(numbers,15))