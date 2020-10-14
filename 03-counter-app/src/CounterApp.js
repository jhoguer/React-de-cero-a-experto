import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

  const [ counter, setCounter ] = useState( value );


  // handleAdd
  const handleAdd = () => {
    // setCounter( counter + 1 );
    setCounter( ( c ) => c + 1 );
  }

  const handleSubstract = () => {
    setCounter( counter - 1 );
  }

  const handleReset = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleReset } >Reset</button>
      <button onClick={ handleSubstract } >-1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

CounterApp.defaultProps = {
  value: 0,
}

export default CounterApp;