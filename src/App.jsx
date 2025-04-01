import './styles/reset.css';
import './styles/scss/App.scss';
import QuestionsSection from './components/QuestionsSection';

export default function App() {
  return (
    <section className='card'>
      <header className='card__header'>
        <img
          src={require('./assets/images/icon-star.svg')}
          alt='Star'
          className='card__icon'
        />
        <h1 className='card__heading'>FAQs</h1>
      </header>

      <QuestionsSection />
    </section>
  );
}
