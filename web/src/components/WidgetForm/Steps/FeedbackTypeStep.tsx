import { FeedbackType, feedbackTypes } from "..";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

// O parâmetro da função pode ser escrito como "props: FeedbackTypeStepProps" e o acesso aos props seria por "props.onFeedbackTypeChanged"
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <div className="flex py-8 gap-2 w-full">
            { Object.entries(feedbackTypes).map(([key, value]) => { // Está quebrando o array retornado pelo map nos 2 valores do retorno, pra evitar usar item[0] e item[1] para acessar os valores
                return (
                    <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        // O focus:outline-none faz com que suma a borda padrão caso o botão seja selecionado pelo teclado usando o TAB
                        onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                        type="button"
                    >
                        <img src={ value.image.source } alt={ value.image.alt }/>
                        <span>{ value.title }</span>
                    </button>
                );
            }) } {/* Vai percorrer o objeto criado no começo da página */}
        </div>
    );
}