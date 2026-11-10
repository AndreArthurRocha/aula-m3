import * as fs from "fs";

export interface ItemCardapio {

    id: number,
    nome: string,
    preco_centavos: number,
    categoria: "lanche" | "bebida" | "porção"
    gelado?: boolean

    // a notacao ?: faz com que essa variável seja opcional

}

export class Cardapio {

    itens: ItemCardapio[] = [];
    recusados: string[] = [];
    
    constructor(caminho: string) {

        const resposta = JSON.parse(fs.readFileSync(caminho, "utf8"));

        for (let i = 0; i < resposta.dados.length; i++) {

            const dado = resposta.dados[i];

            if (typeof dado.preco_centavos === "number") {

                this.itens.push(dado);
            
            } else {

                this.recusados.push(dado) + ": preco_centavos não é do tipo number";
            
            }

        }
    }

}