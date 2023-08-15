let arr= ["oscar", "luis", "juan", "gerardo", "rogelio"]

arr.forEach( function (el, index){
    arr[index] = el + index
})

arr.map()
console.log(arr)