import { useState, useEffect } from "react";

function MouseTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        console.log("Suivi de la souris activé !");

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            console.log("Suivi de la souris désactivé. Nettoyage effectué !");
        };
    }, []);

    return (
        <>
        <p>Position de la souris : X: {position.x}, Y: {position.y}</p>
        </>
    );
}

export default MouseTracker;