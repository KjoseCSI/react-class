

export default function ObjectLiterals() {

    const person = {
        age: 24,
        firstName: 'Jose',
        lastName: 'CHI',
        addres: {
            country: 'Ecuador',
            houseNo: 1235
        }
    }


    return(
        <>
         <h3>Objetos</h3>
            {JSON.stringify(person,null, 2)}

        </>

    )
}