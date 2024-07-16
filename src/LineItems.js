import React from 'react'

const LineItems = ({event,handleChangeCheck,handleClickDelete}) => {
  return (
    <li key={event.id} className='item'>
                    <input
                    style={(event.checked) ? {textDecoration:'line-through!important'} : null}
                    type='checkbox'
                    checked={event.checked}
                    onChange={()=>handleChangeCheck(event.id)} 
                    />
                    {event.text}
                    <button onClick={()=>handleClickDelete(event.id)}>Delete</button>
                    </li>
  )
}

export default LineItems