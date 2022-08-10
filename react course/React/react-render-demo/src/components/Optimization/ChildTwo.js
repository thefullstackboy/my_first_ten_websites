import React from "react";

export const ChildTwo = () => {
    console.log('childOne Render')
    return <div>ChildTwo component</div>
}

export const MemoizedChildTwo = React.memo(ChildTwo)