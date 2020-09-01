let salario = 4000;
let salINSS = 0;
let aliINSS = 0;
let aliIR = 0;
let liq = 0;

if (salario <= 1556.94){
    aliINSS = salario*0.08;
    salINSS = salario-aliINSS;
} else if(salario <=2594.92 && salario>=1556.95 ){
    aliINSS = salario* 0.09;
    salINSS = salario-aliINSS;
} else if(salario <=5189.82 && salario>=2594.93 ){
    aliINSS = salario* 0.11;
    salINSS = salario-aliINSS;
} else if(salario > 5189.82){
    aliINSS = 570.88;
    salINSS = salario-aliINSS;
}

if (salINSS <=2826.65 && salINSS>=1903.99 ){
    aliIR = (salINSS *0.075)- 142.80;
} else if(salINSS <=3751.05 && salINSS>=2826.66){
    aliIR = (salINSS *0.15)- 354.80;
} else if(salINSS <=4664.68 && salINSS>=3751.06){
    aliIR = (salINSS *0.225)-636.13;
} else if(salINSS>4664.68){
    aliIR = (salINSS *0.275)-869.36;
}

liq = salINSS - aliIR;
console.log(`${liq}`);