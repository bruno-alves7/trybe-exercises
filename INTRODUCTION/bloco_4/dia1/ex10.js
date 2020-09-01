let custo = 10;
let vVenda = 100;
let imp =1.2;
let totalVendido = 1000
let valorCustoTotal = null
let lucro = null

if (custo < 0 || vVenda < 0){
    console.log("erro na entrada dos valores");
} else{
    valorCustoTotal = (custo*imp)*totalVendido;
    lucro = (vVenda*totalVendido)-valorCustoTotal;
    console.log(`o custo total foi de ${valorCustoTotal} e o lucro foi de ${lucro}`);
}