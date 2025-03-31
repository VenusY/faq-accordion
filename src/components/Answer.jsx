export default function Answer({ answer }) {
  const paragraphs = answer.split('\n');

  return (
    <div className='answer'>
      {paragraphs.map((paragraph) => {
        return <p className='answer__paragraph'>{paragraph}</p>;
      })}
    </div>
  );
}
