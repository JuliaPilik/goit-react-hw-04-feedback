import React from 'react';
import './Section.module.css';

function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
