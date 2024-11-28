

export default function BasicType() {

    const name: string = 'José Chicaiza'
    const age: number = 34
    const isActive: boolean = false

    const people = ['Ana', 'Carlos', 'Paul' ]

    return(
        <>
         <div>BasicTypes</div>
         {name} - {age} - {isActive ? 'Activo' : 'No Activo'} - {people.join(', ')}
         
        </>

    )
}