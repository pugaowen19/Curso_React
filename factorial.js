
function factorial(num){
    let res = 1
    for(let x = 1 ;x<=num ; x++ ){
        res = res * x
    }
        return res
}

function factorial2(num){
    let res = 1
    for(let x = num ;x>0;x--){
       
        res = res * x

    }
    return res
}

function factorial3(num){
    let res =1
    let x = num
    while(x>0){
        res *= x
        x--

    }
    return res
}

function factorial4(num){
    let res =1
    let x = 1
    while(x<=num){
        res *= x
        x++

    }
    return res
}


//recursion - funcion recursiva

function factorialFinal(num){
    if(num == 0) return 1
    return factorialFinal(num -1) * num
    
}

console.log(factorial4(5))
