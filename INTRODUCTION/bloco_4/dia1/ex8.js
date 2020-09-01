let a = 1;
let b = 2;
let c = 3;
let status = false;

if ( a % 2 == 0 || b % 2 == 0|| c % 2 == 0){
    status = true;
    console.log(`${status}, pelo menos uma variável é par`);
} else {
    console.log(`${status}, nenhuma das variáveis é par`);
}