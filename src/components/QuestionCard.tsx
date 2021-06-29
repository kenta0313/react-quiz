import React from 'react';

type Props = {
    question: string;
    anser: string[];
    callbavck: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({question, anser, callbavck, userAnswer, questionNr, totalQuestions}) => <div>Quedtion Card</div>

export default QuestionCard;