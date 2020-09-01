let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar=0;

for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i]%2>0){
        impar++;
    }
}
if(impar>0){
    console.log(`total de numeros impares foi de ${impar}`);
} else{
    console.log("nenhum valor ímpar encontrado");
}
   