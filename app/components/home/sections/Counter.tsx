'use client'
import { useEffect, useState } from 'react'

type CounterProps = {
    end: number
    duration?: number
}

export default function Counter({ end, duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const increment = end / (duration / 16)
        let animationFrame: number

        const updateCounter = () => {
            start += increment
            if (start < end) {
                setCount(Math.floor(start))
                animationFrame = requestAnimationFrame(updateCounter)
            } else {
                setCount(end)
            }
        }

        animationFrame = requestAnimationFrame(updateCounter)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return <>{count}</>
}
