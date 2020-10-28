import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  let { data: images, loading, background } = useFetchGifs( category );
  console.log(loading, background)

  // switch ( background ) {
  //   case 'background1':
  //     background = 'background2'
  //     break;
  //   case 'background2':
  //     background = 'background3'
  //     break;
  //   case 'background3':
  //     background = 'background1'
  //     break;
  //   default:
  //     background = 'background3'

  // }



  console.log(background)


  

  return (
  <div className={`contentGrid ${background}`}>
    <h3 className="animate__animated animate__fadeIn"> { category } </h3>
    { loading && <p className="animate__animated animate__flash">Loading...</p> } 
    
      <div className="card-grid">
      {
        images.map( ( img ) => (
          <GifGridItem key={ img.id } { ...img } />
        ))

      }
  </div>
    </div>
    
  )
}
