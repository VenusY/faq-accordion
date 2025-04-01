import '../styles/scss/QuestionsSection.scss';
import { useState } from 'react';
import questions from '../questions.json';
import Answer from './Answer';

export default function QuestionsSection() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  return (
    <div className='questions-section'>
      {questions.map((question, index) => {
        function handleClick() {
          if (index === visibleIndex) {
            setVisibleIndex(null);
            return;
          }

          setVisibleIndex(index);
        }

        return (
          <section key={index} className='question' onClick={handleClick}>
            <button className='question__button'>
              <h2 className='question__heading'>{question.question}</h2>

              <img
                src={require('../assets/images/icon-plus.svg')}
                alt='Plus icon'
                className={`question__icon question__plus-icon ${
                  visibleIndex === index ? 'question__plus-icon--hidden' : ''
                }`}
              />

              <img
                src={require('../assets/images/icon-minus.svg')}
                alt='Minus icon'
                className={`question__icon question__minus-icon ${
                  visibleIndex === index ? 'question__minus-icon--visible' : ''
                }`}
              />
            </button>

            <Answer
              answer={question.answer}
              classValue={
                visibleIndex === index ? 'answer answer--visible' : 'answer'
              }
            />
          </section>
        );
      })}
    </div>
  );
}
