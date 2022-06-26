// Usando o Filter
const NUMEROS = [1,2,3,4,5,6,7,8,9,10];
const PAR = NUMEROS.filter((pares) => pares % 2 === 0); // filtra a array Numeros pára mostrar uma lista so com os numeros pares dela
console.log(PAR);

//Usando o MAP
const NUMBERS = [10,20,30,40,50];
const MULT_NUMBERS  = NUMBERS.map((mult)=> mult * 2);// multiplica os numeros da array  NUMBERS por dois sendo ela uma nova lista
console.log(MULT_NUMBERS);

//usando o REDUCE
const NUMS =[10,30,60,90];
const SOMA = NUMS.reduce((soma,adiciona)=> soma + adiciona);// Soma todos os valores do array NUMS usando o reduce para pegar o acumulador soma como  0 e adicionar como o primeiro valor do array

console.log(SOMA);
const PRECOS = [5.50,10,20,50.50];
function recebe (saldo,preco){
    return preco.reduce((numeros,saldo)=> numeros - saldo, saldo);// O reduce eu pego uma lista de precos e uso um limitador como saldo depois da operacao de sup na virgula como 'saldo'
}
console.log(recebe(200,PRECOS));