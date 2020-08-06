

const shuffleArray = (array: any[]) => 
[...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async (totalQuestions: string, level: string, category: string, type: string): Promise <any> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${level}&type=${type}`);

    let {results} = await response.json();

    let quiz: any = results.map((questionObj: any, index: number) => {
        return {
            question: questionObj.question,
            correctAnswer: questionObj.correct_answer,
            options: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }

    })
    console.log(quiz);
    return quiz;
}