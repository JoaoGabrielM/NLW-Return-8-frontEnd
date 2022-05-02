import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'

export function Widget() {
    return (
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel>Hello World</Popover.Panel>
            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"> {/* colocando a cor definida nas configurações do tailwind*/}
                <ChatTeardropDots className="w-6 h-6"/> {/* A tag ground no button diz que todos os elementos dentro dele são do mesmo grupo */}

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"> {/* O ground-hover ativa quando houver um hover no grupo do button */}
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}