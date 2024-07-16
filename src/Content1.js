import ListItems from "./ListItems"


const Content1 = ({list,handleChangeCheck,handleClickDelete}) => {
    
  return (
    <main>
        {(list.length) ? (
            <ListItems 
                list = {list}
                handleChangeCheck = {handleChangeCheck}
                handleClickDelete = {handleClickDelete}
            />        
        ) : (
              <p>Your list is empty</p>
        )}
    </main>
  )

}

export default Content1