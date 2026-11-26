import useWindowSize from "./hooks/useWindowSize";

function ResponsiveComponent() {
    const { width, height } = useWindowSize();

    return (
        <div>
            <h1>Taille de la fenêtre</h1>
            <p>Largeur : {width} px</p>
            <p>Hauteur : {height} px</p>

            {width < 768 ? (
                <p>📱 Vous êtes sur un petit écran (mobile)</p>
                ) : (
                <p>💻 Vous êtes sur un grand écran (ordinateur)</p>
            )}
        </div>
    );
}

export default ResponsiveComponent;