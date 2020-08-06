import React from 'react';

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionType = {
    question: string
    correctAnswer: string
    options: string[]
}

export type questionPropsType = {
    question: string
    options: string[]
    callback: (e:React.FormEvent<EventTarget>, ans: string) =>void
}

export type parametersType = {
    callback: (e:React.FormEvent<EventTarget>, number: string, category: string, difficulty: string, type: string) =>void
}

export type scoreType = {
    score: number
    total: number
    callback: (e:React.MouseEvent) =>void
}