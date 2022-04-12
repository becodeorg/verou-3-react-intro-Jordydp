import React from 'react'
import Button from './Button'
//accepting props - can also use {title}
const Header = ({title, onAdd, showAdd} ) => {

return (
    <header className='header'>
        {/* use props to display title
        u can use {title} */}
        <h1>{title}</h1>
        {/* if showAdd is true = color 'red' else 'green' */}
        {/* if showAdd is true = text 'close' else 'Add' */}
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd}/>
        
    </header>

    )
}

export default Header