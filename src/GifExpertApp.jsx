import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes( newCategory ) ) return;

        // categories.push('Valorant'); asin con el push no se hace
        //  categories.push(newCategory);

         setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...categories, 'Valorant']);
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value)}
        />

        {/* Listado de Gif */}

     
            { 
              categories.map( ( category ) => ( 
                <GifGrid 
                        key={ category } 
                        category={ category } /> 
              )) 
            }
            {/* <li>ABC</li> */}
       
            {/* Gif Item */}

    </>
  )
}
