var a = [], i=true

do{
    fruta = prompt("Digite o nome da fruta: ")
    a[i] = fruta
    document.write("<h2>"+"Frutas: "+a[i]+"</h2>")
    if(i===null){
        i=false
        alert("cancelado")
        return
    }
} while(i=true)