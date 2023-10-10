function calcular() {
    //soma
    event.preventDefault();//parar o submit do formulário

    //criar  uma variável para cada número
    let n1 = parseFloat(window.document.getElementById('n1').value);//Ao invés de let também poderia ser utilizado "const"
    let n2 = parseFloat(window.document.getElementById('n2').value);
    let op = window.document.getElementById('operacao').value;
    let resultado;//undefined
    
    if(isNaN(n1) || isNaN(n2)) {
        alert("É necessário digitar apenas números")
        return;
    }

    if(op == '+') {
        resultado = somar(n1, n2);
        //alert(`Resultado da soma é igual à ${resultado}`)
    } else if (op == '-') {
        resultado = subtrair(n1, n2);
        //alert(`Resultado da subtração é igual à ${resultado}`)
    } else if (op == '*') {
        resultado = multiplicar(n1, n2);
        //alert(`Resultado da multiplicação é igual à ${resultado}`)
    } else if (op == '/') {
        resultado = dividir(n1, n2);
        //alert(`Resultado da divisão é igual à ${resultado}`)
    } else {
        resultado = "Operação inválida!"
    }

    //Inserir um resultado no HTML (DOM)

    document.getElementById('result').innerText = resultado

    //criar uma variável com o resultado da soma
    //const resultado = n1 + n2;

    //exibir o resultado em uma alert - UTILIZAR A INTERPOLAÇÃO
    //alert(`Resultado da soma é igual à ${resultado}`)
}

function subtrair(x, y) {
    return x - y;
}
function somar(x, y) {
    return x + y;
}
function multiplicar(x, y) {
    return x * y;
}
function dividir(x, y) {
    if(y == 0){
        return resultado = 0
    } else {
        return x / y;
    }
}