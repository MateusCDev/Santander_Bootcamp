
const ALUNOS = [{
    nome:"Mateus",
    nota: 5,
},
{
    nome:"Cesar",
    nota :7,
},
{
    nome:"Araujo",
    nota:10,
},
];

function mediaAprovados(alunos, medfinal){
    let aprovados= [];
    for (let i=0; i < alunos.length; i++){
        const {nota, nome}= alunos[i];
        
        if(nota >= medfinal){
            aprovados.push(nome); 
        }
    }
    return aprovados ; 
}
console.log(mediaAprovados(ALUNOS, 7));
