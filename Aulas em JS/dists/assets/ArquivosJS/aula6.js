/
//Set é diferente de uma array pois so mostra valores unicos diferente do array que pode colocar valores repetidos
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(7);
// adiciona valores no SET
mySet.has(1);
//Ver o valor no set se ele estiver la é True se não retorna false
mySet.delete(1);
//deleta o valor na determinada posição

//Map diferente do Objeto ele pode colocar qualquer valor na chave diferente do Object que so permite Strings e so acesso o Map quando eu não sei o valor das chaves
const myMap = new Map();
myMap.set('Carro', 'Honda');
// Map(1) {"Carro "=>"Honda"} Cria uma chave e um valor apos a virgula
myMap.get('Carro');
//Honda Le o valor dentro da respectiva chave
myMap.delete("Carro");
//Deleta o valor da chave
console.log(mySet);
*/

