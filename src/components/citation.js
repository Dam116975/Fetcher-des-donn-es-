import React from 'react';

function DisplaySimpson({ citation }) {
  return (
    citation && (
      <div className='DisplaySimpson'>
        <ul>
          <li>
           quote : { citation.quote} 
          </li>
          <li>
          character : { citation.character} 
          </li>
        </ul>
        <img src = {citation.image} alt = {citation.character} />
      </div>
    )
  );
}

export default DisplaySimpson;