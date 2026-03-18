"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
    from?: number;
    to: number;
    duration?: number; // in seconds
}

const Counter: React.FC<CounterProps> = ({ from = 0, to, duration = 2 }) => {
    const [count, setCount] = useState(from);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounter();
                    setHasAnimated(true); // prevent repeat
                }
            },
            { threshold: 0.6 } // start when 60% visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounter = () => {
        const totalFrames = duration * 60; // 60 FPS
        const increment = (to - from) / totalFrames;
        let current = from;
        let frame = 0;

        const counter = setInterval(() => {
            current += increment;
            frame++;

            if (frame >= totalFrames) {
                clearInterval(counter);
                setCount(to);
            } else {
                setCount(Math.floor(current));
            }
        }, 1000 / 60);
    };

    return <span ref={ref}>{count}</span>;
};

export default Counter;
