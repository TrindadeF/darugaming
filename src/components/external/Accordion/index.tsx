import React from 'react';
import AccordionItem from './AccordionItem';
import { useTranslation } from 'react-i18next';

export default function Accordion() {
    const { t } = useTranslation('about');

    const questionsAnswers = [
        {
            open: false,
            question: t('accordion.question1'),
            answer: t('accordion.answer1')
        },
        {
            open: false,
            question: t('accordion.question2'),
            answer: t('accordion.answer2')
        },
        {
            open: false,
            question: t('accordion.question3'),
            answer: t('accordion.answer3')
        },
        {
            open: false,
            question: t('accordion.question4'),
            answer: t('accordion.answer4')
        }
    ];

    return (
        <div className="grid gap-6 md:w-240 w-full mx-auto">
            {questionsAnswers.map((item, i) => (
                <AccordionItem key={i} idAccordion={i} question={item.question} answer={item.answer} />
            ))}
        </div>
    )
}