import '../styles/scss/QuestionsSection.scss';
import questions from '../questions.json';
import Answer from './Answer';

export default function QuestionsSection() {
  return (
    <div className='questions-section'>
      {questions.map((question, index) => {
        return (
          <section key={index} className='question'>
            <button className='question__button'>
              <h2 className='question__heading'>{question.question}</h2>

              <img
                src={require('../assets/images/icon-plus.svg')}
                alt='Plus icon'
                className='question__icon question__plus-icon'
              />
              <img
                src={require('../assets/images/icon-minus.svg')}
                alt='Minus icon'
                className='question__icon question__minus-icon'
              />
            </button>

            <Answer answer={question.answer} />
          </section>
        );
      })}
    </div>
  );
}
