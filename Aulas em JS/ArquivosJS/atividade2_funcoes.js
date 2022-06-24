const PESSOA = {
    nome : "Mateus",
    idade : 23
};
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(PESSOA, 5));
console.log(calculaIdade.apply(PESSOA,[10]));