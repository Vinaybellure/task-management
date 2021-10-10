import React from 'react'

function Input_text({pholder, type, onChange}) {
    return (
        <input type={type} placeholder={pholder}  onChange={(e) =>onChange(e.target.value)}/>
    )
}

export default Input_text