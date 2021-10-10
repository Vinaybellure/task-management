import React from 'react'

function Text_area({value, onChange}) {
    return (
        <textarea  value={value} onChange={(e) =>onChange(e.target.value)}/>
    )
}

export default Text_area