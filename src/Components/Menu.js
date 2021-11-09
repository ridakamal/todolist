import React from 'react'

const Menu = (props) => {
    return (
       <h2> <ul> {props.list1} 
        {props.list2}
        {props.list3}
        {props.list4}
        {props.list5}
        {props.list6}
        </ul>
        </h2>
        
    )
}

export default Menu
