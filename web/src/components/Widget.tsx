import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    return (
        <div className="absolute bottom-5 right-5">
            <button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"> {/* colocando a cor definida nas configurações do tailwind*/}
                <ChatTeardropDots className="w-6 h-6"/> {/* A tag ground no button diz que todos os elementos dentro dele são do mesmo grupo */}

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"> {/* O ground-hover ativa quando houver um hover no grupo do button */}
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </button>
        </div>
    )
}