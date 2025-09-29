/*definir valores p um vetor numérico*/
var a = [6, 5, 8, 3, 7]

/*exibir um vetor para o usuário*/
alert(a)

/*exibir um elemento do array*/
alert(a[2])

/*alterar um elemento do array*/
a[1] = 4
alert(a)

/*percorrendo todo o array usando laço de repetição*/
for(var i=0; i<5; i++)
{
    document.write("<h2>"+a[i]+"</h2>")
}