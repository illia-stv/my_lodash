function print(val){
  console.log(val)
}


function chunk(arr, int){
  if(int == 0) return []

  let my_new_arr = [];
  
  for(let i = 0; i < Math.ceil(arr.length/int); i++){
    my_new_arr.push([])
  }
 
  for(let i = 0; i < arr.length; i++){
    // print(arr[i])
    my_new_arr[Math.ceil((i+1)/int)-1].push(arr[i])
  }
  return my_new_arr
}

print(chunk([1,2,3,4,5], 3))