import React from 'react'
import {BiAddToQueue} from 'react-icons/bi'

const Header = () => {
return (
    <header>
        <div className='header'>
            <h1>Click + To Add Task </h1>
            <h1><BiAddToQueue /></h1>
        </div>
    </header>
)
}

export default Header