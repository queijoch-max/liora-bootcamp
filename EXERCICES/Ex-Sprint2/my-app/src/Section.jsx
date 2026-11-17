import CaramelImg from "./assets/lastardujour.png"

function Section() {
    return (
        <section className="Section">
            <h2 id="LSDJ">La Star du Jour</h2>
            <p>Voici Caramel, 2 ans, notre boule de poils rousse aux grands yeux ambrés ! Curieux de tout et toujours étonné par le monde qui l’entoure, il adore se percher sur les canapés pour surveiller son territoire. Câlin et plein d’énergie, il n’attend plus qu’une famille pour partager ses bêtises… et ses ronrons.</p>
            <img className="CaramelImg" src={CaramelImg} alt="Caramel, chat roux en train de fixer la camera percher sur son canapé."/>
        </section>
    );
}

export default Section;