import React, { useState } from 'react';

import {AddCategory} from './components/AddCategory';


const GifExpertApp = () => {

  // const categories = ['One Punh', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punh', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = () => {

  //   // setCategories( [...categories, 'Saylor Moon'] )
  //   setCategories( cats => [ ...cats, 'Saylor Moon' ] );
  // }

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      {/* <button onClick={ handleAdd }>Agregar</button> */}
      <ol>
        {
          categories.map( category => {
            return <li key={ category }> { category } </li>
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp;