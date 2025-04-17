"use client";

import { useState } from "react";

type Faq = {
    idAccordion: number,
    question: string;
    answer: string;
}

export default function AccordionItem({ idAccordion, question, answer }: Faq) {
    const [selected, setSelected] = useState<boolean>(false);
    return (
        <div className="bg-[#41434B] clip-path-element">
            <div className="flex px-10 py-6 justify-between">
                <h3 className="text-lg font-semibold"><span className="text-cyan-400 mr-4">{idAccordion + 1}</span> {question}</h3>
                <div className="arrow">
                    <span onClick={() => setSelected(!selected)} className={selected ? "show" : ""}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4975 12.1691L17 18.6575L23.5025 12.1691L25.5 14.1666L17 22.6666L8.5 14.1666L10.4975 12.1691Z" fill="white" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className={selected ? "max-h-auto px-10 pb-6" : "max-h-0 hidden px-10 pb-6"}>
                {answer}
            </div>
        </div>
    )
}
