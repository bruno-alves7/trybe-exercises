let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med = 0;

for(let i = 0 ; i < numbers.length ; i++){
    sum += numbers[i];  
}
med = sum/numbers.length;
console.log(med);