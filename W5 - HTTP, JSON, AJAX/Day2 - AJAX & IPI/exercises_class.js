function calcDigit(num){
    let arr = new String(num).split('');
    console.log(arr);
    let sum = arr.reduce((total,num)=>{
      return total + Number(num)
    })
    if(sum < 10){
       return sum;
    }
    return calcDigit(sum)
  }

  

  function calcDigit(num){
    let arr = new String(num).split('');
    let sum = 0;
    for(i in arr){
      sum = sum + Number(arr[i]);
    }
    if(sum < 10){
       return sum;
    }
    return calcDigit(sum)
  }

  




