import { CloseButton } from "./CloseButton";

const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: "",
            alt: ""
        }
    },
    IDEA: {
        title: "Ideia",
    },
    OTHER: {
        title: "Outro",
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
                <button></button>
            </div>

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-machado-978565120/">Threaxe</a>
            </footer>
        </div>
    );
}