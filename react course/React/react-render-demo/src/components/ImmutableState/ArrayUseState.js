import React, {useState} from 'react'

const initState = ['Bruce', 'Wayne']

function ArrayUseState() {
    const [persons, setPersons] = useState(initState)



    const handleClick = () => {
        // persons.push('Clark')
        // persons.push('Kent')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('Clank')
        newPersons.push('Kent')
        setPersons(newPersons)
    }

    console.log('ArrayUseState Render')
  return (
    <div key={persons}>
        <button onClick={handleClick}>Click</button>
        {
            persons.map(person => (
                <>
                <div key={person}>{person}</div>
            
                </>
            ))
        }
    </div>
  )
}

export default ArrayUseState