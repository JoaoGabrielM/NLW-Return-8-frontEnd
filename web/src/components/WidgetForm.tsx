import { CloseButton } from "./CloseButton";

import bugImageURL from '../assets/bug.svg';
import ideaImageURL from '../assets/idea.svg';
import thoughtImageURL from '../assets/thought.svg';

const feedbackTypes = { // Foi criado dessa forma para facilitar a manutenção, pois basta adicionar um novo elemento que o visual será alterado
    BUG: {
        title: "Problema",
        image: {
            source: bugImageURL,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageURL,
            alt: "Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageURL,
            alt: "Imagem de um balão de pensamento"
        }
    }
}

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {/* Na classe acima, o tamanho do elemento é ajustado para ser diferente no mobile ou dispositivos maiores, do md pra cima fica auto, no sm ocupa a largura toda da tela */}
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => { // Está quebrando o array retornado pelo map nos 2 valores do retorno, pra evitar usar item[0] e item[1] para acessar os valores
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            // O focus:outline-none faz com que suma a borda padrão caso o botão seja selecionado pelo teclado usando o TAB
                            //onClick={}
                            type="button"
                        >
                            <img src={ value.image.source } alt={ value.image.alt }/>
                            <span>{ value.title }</span>
                        </button>
                    );
                }) } {/* Vai percorrer o objeto criado no começo da página */}
            </div>

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-machado-978565120/">Threaxe</a>
            </footer>
        </div>
    );
}