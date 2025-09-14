const PilhaFeiticos = require('./PilhaFeiticos');

const livro_feitico = new PilhaFeiticos();

//adicionando fetiços
livro_feitico.adicionar("Black Slash");
livro_feitico.adicionar("Water Creation Magic: Sea Dragon’s Roar");
livro_feitico.adicionar("Lightning Creation Magic: Lightning Ball");
livro_feitico.adicionar("Spatial Magic: Archangel Shoot Down"); // <-- Item no topo da lista! Vai ser removido logo a baixo


//removendo o ultimo feitiço (Spatial Magic: Archangel Shoot Down)
livro_feitico.remover();

//vai printr o elemento q esta no topo da pilha
console.log(livro_feitico.topo());// Lightning Creation Magic: Lightning Ball

//return false, pois a pilha n está vazia
console.log(livro_feitico.estaVazia()); 