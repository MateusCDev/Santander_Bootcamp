//atividade 1
const USUARIOS = new Map([["Mateus","ADMIN"], ["Eduarda","Comum"], ["Miguel", "ADMIN"]]);

function getAdmins (Map){
    for (let [keys, values] of Map){
        let admins = [];
        if(values === "ADMIN"){
            admins.push(keys);
            console.log(`Os administradores são : ${admins}`);
        }
    }
}
console.log(getAdmins(USUARIOS));
//atividade 2
const LISTA = [30, 30, 40, 5, 223, 2049, 3034, 5];
const NEWLISTA = new Set(LISTA);

console.log([...NEWLISTA]);// para jogar o set em uma nova array tem que usar a tecnica rest ... na declaração da função