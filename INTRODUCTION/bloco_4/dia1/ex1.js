let a = 5//("Digite um valor.");
let b = 2//("Digite um valor.");
let op = "%"//("Digite uma operação entre +, -, x , / ou % para resto da divisão");
let res = null;


switch(op){
    case "+":
        res = a + b;
        console.log(`Resultado da adição entre ${a} e ${b} é ${res}`);
        break;
    case "-":
        res = a - b;
        console.log(`Resultado da subtração entre ${a} e ${b} é ${res}`);
        break;
    case"x":
        res = a*b;
        console.log(`Resultado da multiplicação entre ${a} e ${b} é ${res}`);
        break;
    case"/":
        res = a/b;
        console.log(`Resultado da divisão entre ${a} e ${b} é ${res}`);
        break;
    case"%":
        res = a%b;
        console.log(`Resultado do resto da divição entre ${a} e ${b} é ${res}`);
        break;
}

