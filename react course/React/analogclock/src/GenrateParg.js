import React, { useState } from 'react';
import data from './Componets/data';
import "../src/Prag.css"


function GenratePar() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>Generate Lorem Ipsum?</h3>
      <form className='my-form' onSubmit={handleSubmit}>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default GenratePar;