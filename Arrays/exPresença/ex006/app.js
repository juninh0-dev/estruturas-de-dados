const MeuArray = require("./MeuArray");

const meuArray = new MeuArray();

meuArray.adicionar(5);

meuArray.adicionar(15);

meuArray.limpar();

meuArray.adicionar(15);

meuArray.adicionar(35);

meuArray.verItens();

/*Ele mostra os valores dos dois ultimos números adicionados
por conta de que os dois primeiros que adicionei recebem o método 
abaixo limpar() que exclui todos os dados(no caso zera o tamanho
e os valores dentro do array). Quando eu adiciono os ultimos 2 itens
15 e 35 ele retorna para mim me verItens, esses dois itens*/