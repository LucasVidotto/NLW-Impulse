import { useState } from "react";
import { Closebutton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeSteps";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto, uma lagarta'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

//typescript
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);
    function handlerResgtartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {
                feedbackSent ? (
                    <FeedbackSucessStep onFeedbackRestartRequested={handlerResgtartFeedback} />
                ) : (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                        ) : (
                            <FeedbackContentStep
                                feedbackType={feedbackType}
                                onFeedbackRestartRequested={handlerResgtartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />
                        )
                        }
                    </>
                )
            }
            <footer className="text-xs text-neutral-400">
                Feito com 💜 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">ROcketseat</a>
            </footer>
        </div >
    )
}