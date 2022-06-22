var num1 = 6;
var num2 = 6;

function soma (val1,val2){
    return val1+val2;
}
if (num1 === num2)
{
    if((soma(num1,num2)>10)&&(soma(num1,num2)<20))
    {
        console.log("Os numeros:", num1 ,"e", num2, "são iguais.", "Sua soma é:", soma(num1,num2),", que é maior que 10 e menor que 20");
    }
    if((soma(num1,num2)<10)&&(soma(num1,num2)>20))
    {
        console.log("Os numeros:", num1 ,"e", num2 ,"são iguais.", "Sua soma é:", soma(num1,num2),", que é menor que 10 e maior que 20");
    }
    if((soma(num1,num2)>10)&&(soma(num1,num2)>20))
    {
        console.log("Os numeros:", num1, "e", num2, "são iguais.", "Sua soma é:", soma(num1,num2),", que é maior que 10 e maior que 20");
    }
    if((soma(num1,num2)<10)&&(soma(num1,num2)<20))
    {
        console.log("Os numeros:", num1, "e", num2, "são iguais.", "Sua soma é:", soma(num1,num2),", que é menor que 10 e menor que 20");
    }
}
if (num1 != num2)
{
    if((soma(num1,num2)>10)&&(soma(num1,num2)<20))
    {
        console.log("Os numeros:", num1 ,"e", num2, "não são iguais.", "Sua soma é:", soma(num1,num2),", que é maior que 10 e menor que 20");
    }
    if((soma(num1,num2)<10)&&(soma(num1,num2)>20))
    {
        console.log("Os numeros:", num1 ,"e", num2 ,"não são iguais.", "Sua soma é:", soma(num1,num2),", que é menor que 10 e maior que 20");
    }
    if((soma(num1,num2)>10)&&(soma(num1,num2)>20))
    {
        console.log("Os numeros:", num1, "e", num2, "não são iguais.", "Sua soma é:", soma(num1,num2),", que é maior que 10 e maior que 20");
    }
    if((soma(num1,num2)<10)&&(soma(num1,num2)<20))
    {
        console.log("Os numeros:", num1, "e", num2, "não são iguais.", "Sua soma é:", soma(num1,num2),", que é menor que 10 e menor que 20");
    }
}


