let resultado;
let valor;

function botao(num){

    valor = document.calculadora.tx.value += num;
            
   }
function calcular(){
    resultado = eval(valor);
    document.calculadora.tx.value = resultado;
    }

function apagar(){
    document.calculadora.tx.value = "";
}