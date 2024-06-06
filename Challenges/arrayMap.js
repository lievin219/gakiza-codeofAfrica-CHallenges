 function arraymapping(arra,target){
     let sum=0; //
     let currentsum=0;  // this is where the summation will be made of all number in an arra(array we will be using)
      
     
     for(let i=0;i<arra.length;i++){ // this is a loop which will pass through each element in an array 
          currentsum=currentsum+arra[i] // this will make a sum of all elements in an array 
           
          while(currentsum>target && sum<=i){ // when the loop reaches where currentsum is greater than target it will start removing an element at the beginning
            currentsum -=arra[sum]     // this  subtract the element at the sum index from currentsum and increment sum.
            sum++
           }

           
      
          if(currentsum===target){ // this if staement will check if the current sum is equal to the target we entered 
            return true    // if condition is true it will return true
              
               }


      }
     
    
          return false     // otherwise it will return false if it finds that 
   



 }
 
 const numbers=[1,2,3,4,5] //an example of a subarray we want to use 
  console.log(arraymapping(numbers,15))  // calling our function to check it's functionality