import { useEffect, useState } from 'react'

export const useDebounce = (query: string, delay = 500) => {
    const [value, setValue] = useState('')
    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(query)
            clearTimeout(timer)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [delay, query])

    return value
}
