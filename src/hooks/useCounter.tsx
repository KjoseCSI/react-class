import { useState } from 'react';

export default function useCounter() {

    const [count, setCount] = useState(0)

    const handleClickPlus = () => {
        /* setCount(count + 1) */
        setCount(currentValue => currentValue + 1)
        setCount(currentValue => currentValue + 1)
        setCount(currentValue => currentValue + 1)
        
    }

    const handleClickLess = () => {
        /* setCount(count - 1) */
        setCount(currentValue => currentValue -1)
        setCount(currentValue => currentValue -1)
        setCount(currentValue => currentValue -1)

    }


    return {count, handleClickPlus, handleClickLess}
}
