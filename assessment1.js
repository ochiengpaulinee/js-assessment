//Write a function that takes in a string and returns it when reversed
//let food = “eating”




//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23

function binary(num,target){
    let left = 0;
    let right = num.length-1

    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]>target){
            right = middle-1
        }
        else{
            left = middle+1
        }
    }
    return null
}
target = 23
let num = [2,8,0,23,5,45,76]
console.log(binary(num,target))


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

function years(year){
    if(year%4 ===0){
        console.log("{$year} is leap year")
    }
    else{
        console.log("$year is not leap year")
    }
}
let year = 2000
console.log(years(year))

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

let numbers = 0-100
if(numbers%3==0){
console.log("Fizz")
}
else if(numbers%5==0){
    console.log("Buzz")
}
else if(numbers%3==0 && numbers%5==0){
    console.log("FizzBuzz")
}

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]

let numArray = [12,87,45,75,23,64,63]
let x = numArray.map(function(item){
return item*4
})
console.log(x)


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

let nums = ["10","24","45","56","67"]
let z = nums.join()
console.log(z)







