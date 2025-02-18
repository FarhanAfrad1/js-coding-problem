console.log('hello')
// unit converstion
function inchToFeet(number){
    const result = number/12;
    const feet = parseInt(result);
    // const inch = ((result-Math.floor(result))*12).toFixed(2);
    const inch = number % 12;
    
    return `${feet} feet ${inch} inch`;
}
// console.log(inchToFeet(33))

function milesToKm(distance){
    return distance * 1.61;
}
// console.log(milesToKm(1))

// leap year check
function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0) return true;
    else if(year % 400 === 0) return true;
    else return false;
}
const year1 = isLeapYear(2052)
const year2 = isLeapYear(2000)
const year3 = isLeapYear(1900)
const year4 = isLeapYear(2400)

// console.log(year1,year2,year3,year4)

// calculate the odd number of an array
function calculateOddFromArray(arr){
    let sum = 0;
    let count = 0; 
    for(let element of arr){
        if(element % 2 !== 0){
            count++
            sum+=element
        }
        else continue;
    }
    return sum/count;
}

// console.log(calculateOddFromArray([1,2,3,4,5,7,8,9]));

// remove duplicate from an array
function removeDuplicate(arr){
    let newArr = [];
    for(let element of arr){
        if(!newArr.includes(element)){
            newArr.push(element);
        }
        else continue;
    }
    return newArr
}
// console.log(removeDuplicate([1,1,2,2,2,3,4,5,6,6,6,7,7,7]))

// find the max element from an array
function maxElement(arr){
    let max = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
        else continue;
    }
    return max;
}

// console.log(maxElement([90,65,66,68,72,78,60]))
// find the cheapest phone from an array of phone object
const phones = [
    {name:'s25Ultra',brand:'samsung',price:120000,ram:'7gb'},
    {name:'16plus',brand:'iphone',price:140000,ram:'8gb'},
    {name:'iqoo+',brand:'vivo',price:80000,ram:'6gb'},
    {name:'note14',brand:'xioami',price:50000,ram:'8gb'},
    {name:'13',brand:'oneplus',price:49000,ram:'16gb'},
]
function findCheapestPhone(phones){
    let cheapest = phones[0].price;
    for(let phone in phones){
        
        if(phones[phone].price < cheapest){
            details = `price:${phones[phone].price} name: ${phones[phone].name} and brand: ${phones[phone].brand}`
        }
    }
    console.log(details)
}
// findCheapestPhone(phones)
// calculate total price of cart
const cart = [
    {name:'shampoo', price:300, quantity:1},
    {name:'soup', price:80, quantity:3},
    {name:'meat', price:700, quantity:1},
    {name:'chicken', price:300, quantity:2}
]
function totalOfCart(cart){
    let total = 0; 
    for(let product of cart){
        total += product.price * product.quantity;
    }
    console.log(total);
}
totalOfCart(cart);