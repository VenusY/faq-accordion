import questions from '../questions.json';
import Answer from './Answer';

export default function QuestionsSection() {
  return (
    <div className='questions-section'>
      {questions.map((question, index) => {
        return (
          <section key={index} className='question'>
            <h2 className='question__heading'>{question.question}</h2>
            <Answer answer={question.answer} />
          </section>
        );
      })}
    </div>
  );
}
