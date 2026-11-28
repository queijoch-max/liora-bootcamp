import { useStopwatch } from "../hooks/useStopwatch";

export default function Stopwatch() {
    const { time, start, stop, reset } = useStopwatch();

    return (
        <div>
            <p>Chronomètre : {time}s</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
