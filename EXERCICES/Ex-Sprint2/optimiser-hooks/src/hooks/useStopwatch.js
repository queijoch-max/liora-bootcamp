import { useState, useRef, useCallback, useEffect } from 'react';

export function useStopwatch() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const start = useCallback(() => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);
    }, []);

    const stop = useCallback(() => {
        if (intervalRef.current === null) return;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    const reset = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }, []);

    useEffect (() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return { time, start, stop, reset };
}