import React from 'react'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inpRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='AddItem'>Add Item</label>
        <input
        autoFocus
        required
        type='text'
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        ref={inpRef}
        />
        <button type='submit' onClick={()=>inpRef.current.focus()}>
            Add
        </button>
    </form>
  )
}

export default AddItem