export default function Answer({ answer, classValue }) {
  const paragraphs = answer.split('\n');

  function preventPropagation(e) {
    e.stopPropagation();
  }

  return (
    <div className={classValue} onClick={preventPropagation}>
      <div className='answer__paragraphs'>
        {paragraphs.map((paragraph, index) => {
          return (
            <p key={index} className='answer__paragraph'>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}
