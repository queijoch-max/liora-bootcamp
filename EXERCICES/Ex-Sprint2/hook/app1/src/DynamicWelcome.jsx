import { useState, useEffect } from "react";

function DynamicWelcome() {
    const [message, setMessage] = useState("Prêt à découvrir React ?");

    useEffect(() => {
        console.log("Bienvenue sur la page ! (Message de montage)");

        const timerId = setTimeout(() => {
            setMessage("React, c'est génial !");
            console.log("Message mis à jour après 3 secondes !");
        }, 3000);

        return () => {
            clearTimeout(timerId);
            console.log("Timer de bienvenue nettoyé.")
        };
    }, []);

    return (
        <>
        <h1>{message}</h1>
        </>
    );
}

export default DynamicWelcome;