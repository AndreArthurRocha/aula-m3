// let nome: string = "joao";
// let preco: number = 29.98;
// let aberta: boolean = true;

// let precos: number [] = [20.90, 19.90, 10.90];
// let item: string [] = [];

// let exemplo = 3;
// let exemplo2: any = 0;

// import { emReais } from "./comanda";

// const itens: string[] = [];
// const precos: number[] = [];
// const quantidades: number[] = [];

// function adicionar(item: string, precoCentavos: number, quantidade: number): void {

// itens.push(item);
// precos.push(precoCentavos);
// quantidades.push(quantidade);

// }

//  export function emReais(centavos: number): string {

//      return "R$ " + (centavos / 100).toFixed(2);

// }

import { ItemComanda, Comanda } from "./comanda";
import { Cardapio } from "./cardapio";

const cardapio = new Cardapio("dados/cardapio.json");
console.log(cardapio.itens.length + " Itens do cardápio");
console.log("Recusados: " + cardapio.recusados)

const mesa7 = new Comanda(7);

const pedidos = ["x-burguer", "refrigerante lata", "batata frita"];

// preciso percorrer a lista e buscar CADA item no cardápio, e verificar se está lá
// ou não, se estiver adiciona à mesa7

for (let i = 0; i < pedidos.length; i++) {

    const item = cardapio.buscar(pedidos[i]);

    if (item === undefined) {

        console.log(pedidos[i] + " não está no cardápio.");

    } else {

        mesa7.adicionar(new ItemComanda(item.nome, item.preco_centavos, 1))

    }

}

// const burguer = new ItemComanda ("X-Burguer", 19.50, 1);
// mesa7.adicionar(burguer);

// mesa7.adicionar(new ItemComanda("X-Salada", 12.00, 2));
// mesa7.adicionar(new ItemComanda("Fritas", 16, 2));

console.log(mesa7.fechar());

// console.log(burguer.subTotal());
// console.log(burguer);
// console.log(burguer.nome);

try {

    mesa7.adicionar(new ItemComanda("suco de manga", 850, 0));

} catch (erro) {

    console.log("Não entrou. " + erro);

}

// const suco = new ItemComanda("suco de caju", 750, 0);

console.log("chegou aqui? ........")