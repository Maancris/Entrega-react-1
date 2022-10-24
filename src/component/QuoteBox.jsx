import React, { useState } from 'react';
import File from '../File';
import ChangeAuthor from './ChangeAuthor';
import ChangeLetter from './ChangeLetter';

const QuoteBox = () => {
  const mathOne = Math.floor(Math.random() * File.length)
  const [first, setFirst] = useState(mathOne)

  const changeCard = () => {
    const mathTwo = Math.floor(Math.random() * File.length)
    setFirst(mathTwo)
  }
    const colors = [
      "#845EC2", "#D65DB1", "#FF6F91",
      "#FF9671", "#FFC75F", "#F9F871"
    ];
    const changeColor = Math.floor(Math.random() * colors.length);
    document.body.style = ` background: ${colors[changeColor]} ` ;
    

  
  return (
    <>
    
      <div className='one' style={{color : colors[changeColor]}}   >
        <div className='son' >
          <div className='dad'>
            <i className='fa-solid fa-quote-left hello'></i>
          </div>

          <div className='sonone'>
            <ChangeLetter changeCard={changeCard} first={first} />
          </div>
        </div>

       
          <div className='sontwo'  >
            <ChangeAuthor changeCard={changeCard} first={first} />
            </div>
           <div className='sonthree'>  
            <button className='button'  onClick={changeCard} style={{background : colors[changeColor]}} ><i className=" fa-solid fa-angle-right "></i></button>
        
        </div>
      </div>
     
    </>
  );
};

export default QuoteBox;