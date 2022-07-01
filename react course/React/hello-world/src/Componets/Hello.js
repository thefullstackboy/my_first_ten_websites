import React from "react";

//JSX example ha
// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello Vishwas</h1>
//         </div>
//     )
// }

//without jsx
const Hello = () => {
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
         React.createElement('h1', null, 'Hello Vishwas'))
}

export default Hello