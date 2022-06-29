const ARRAY = [1,2,3,4,5,6];
var number = 6;

function recebeArray(array,number)
{
    try{
        if(!array && !number)throw new ReferenceError("Envie os parametros");
        
        if ((typeof array !== "object") && (typeof number !== "number"))throw new TypeError("O valor enviado não é nem um numero e nem um array");
        
        if(array.length !== number)throw new RangeError("O valor enviado foi diferente do tamanho da array");
            
        return array;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Este erro é um ReferenceErro");
            console.log(error.message);
        }else if (error instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(error.message);
        }else if (error instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(error.message);
        }
    }
}
console.log(recebeArray(ARRAY,number));