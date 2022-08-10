import React from 'react'

export const ChildFour = ({ name }) => {
    const date = new Date()
    console.log('ChildFour Render')
    return (
        <>
        Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}:{''}
        {date.getSeconds()}
        </>
    )
}

export const MemoizedChildFour = React.memo(ChildFour)