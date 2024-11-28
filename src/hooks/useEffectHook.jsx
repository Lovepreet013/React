import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectHook = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        },1000)

        //clean up function
        return () => {
            clearInterval(intervalId)
        }
    },[])
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

export default UseEffectHook
