function ad (){
    let n1 = window.prompt("Digite o primeiro numero:")
    let n2 = window.prompt ("Digite o segundo numero:")
    n3 = n1+n2

    let res = document.getElementById('resultado')

res.innerHTML = `<p> o resultado da soma é ${n3}.`

}
