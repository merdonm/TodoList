import React from 'react'
import LineItems from './LineItems';

const ListItems = ({list,handleChangeCheck,handleClickDelete}) => {
  return (
    <ul>
            {list.map((event) => {return(
                <LineItems
                    event = {event}
                    key={event.id}
                    handleChangeCheck = {handleChangeCheck}
                    handleClickDelete = {handleClickDelete}
                />
            );})} 
        </ul>
       
  )
}

export default ListItems