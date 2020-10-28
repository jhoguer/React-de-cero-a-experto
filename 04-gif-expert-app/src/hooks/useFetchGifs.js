import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true,
    background: "background1"
  });

  


  useEffect( () => {

    getGifs( category )
      .then( imgs => {

        setState({
          data: imgs,
          loading: false,
          background: 'background3'          
        });
      })
  }, [category])

  
  return state;
}