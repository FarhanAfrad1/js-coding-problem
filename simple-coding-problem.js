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
console.log(removeDuplicate([1,1,2,2,2,3,4,5,6,6,6,7,7,7]))