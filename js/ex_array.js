var a = [], total = 0

for(var i=1; i<11; i++){
    valor = parseFloat(prompt("Digite o preço do produto "+i+" :"))
    a[i] = valor
    document.write("<h2>"+"Valores: "+a[i]+"</h2>")
    total = valor + total
}

document.write("<h2>"+total+"</h2>")

var media = total / 10
document.write("<h2>"+media+"</h2>")