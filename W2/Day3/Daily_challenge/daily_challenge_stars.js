let star = "* "


for (let index = 1; index <= 6; index ++){
   if (index % 2 == 0 || index == 1){ 
      console.log(`%c${star}` + `%c${star.repeat(index -1)}`, "color: darkgreen;", "colorbla: ck;")
   }
   else {
   console.log(star.repeat(index))
}
}








    
