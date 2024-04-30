import React from 'react'

export const InputTextComponent = (props) => {

  const {type, label, required, placeHolder, disable} = props;

  // console.log("type", type);

  return (
    
    <div>

      <label>{label}
      {
        required ? <span style={{color: 'red'}}>&#8727;</span> : ''
      }
      </label>
      <input type={type}
       placeholder={placeHolder}

       />
    </div>
  )
}
