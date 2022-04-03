import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// , { Fragment, useState, useEffect } 
import { GiftItem } from './GiftItem';

export const GifGrid = ({category}) => {
    
    const { data:images, loading } = useFetchGifs(category);
 
      return (
      <>
          <h3 className="animate__animated animate__fadeIn">{category}</h3>        
           {loading && <p className="animate__animated animate__flash">cargando...</p>} 
          <hr></hr>        
            <div className="card-grid">                        
                {
                    images.map((image)=>(
                        <GiftItem key={image.id} {...image} />
                    ))
                }        
            </div>
      </>
    
  )
}
