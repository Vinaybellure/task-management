import React from 'react'

function Button({onClick,name, cname}) {
    return (
        <button type="submit" className={cname} onClick={onClick}>{name}</button> 
    )
}

export default Button