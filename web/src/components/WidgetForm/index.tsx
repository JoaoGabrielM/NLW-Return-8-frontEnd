import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageURL from '../../assets/bug.svg';
import ideaImageURL from '../../assets/idea.svg';
import thoughtImageURL from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = { // Foi criado dessa forma para facilitar a manutenção, pois basta adicionar um novo elemento que o visual será alterado
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

export type FeedbackType = keyof typeof feedbackTypes; // Torna os tipos de feedback aceitáveis somente os que são chave de feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null); // Torna os tipos aceitos somente os FeedbackType ou null
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {/* Na classe acima, o tamanho do elemento é ajustado para ser diferente no mobile ou dispositivos maiores, do md pra cima fica auto, no sm ocupa a largura toda da tela */}

            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {/* Quando não tiver um tipo de feedback, ele retorna os botões. Caso tenha um tipo, ele age diferente */}
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)}/>
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-machado-978565120/">Threaxe</a>
            </footer>
        </div>
    );
}