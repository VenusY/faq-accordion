export default function Answer({ answer, classValue }) {
  const paragraphs = answer.split('\n');

  return (
    <div className={classValue}>
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
