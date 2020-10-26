import React, { useState } from 'react';

import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

  // const categories = ['One Punh', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Pokemon']);

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
          categories.map( category => (
            <GifGrid 
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;