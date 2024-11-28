interface Person {
    age?:number,
    firstName?: string,
    lastName?: string,
    address?: {
        country?: string,
        houseNo?: number
    }

}

export default function ObjectLiterals() {

    const person: Person = {
        age: 24,
        firstName: 'Jose',
        lastName: 'CHI',
        address: {
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