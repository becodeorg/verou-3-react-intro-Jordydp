import React from 'react'
import Button from './Button'
//accepting props - can also use {title}
const Header = (props) => {
const onClick = () => {
    console.log('click')
}

return (
    <header className='header'>
        {/* use props to display title
        u can use {title} */}
        <h1>{props.title}</h1>
        <Button color='green' text='add' onClick={onClick}/>
        
    </header>

    )
}

export default Header