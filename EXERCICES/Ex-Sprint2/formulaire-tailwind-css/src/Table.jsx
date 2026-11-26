function Table() {
    return (
        <>
        <h1 className="title max-w-md mx-auto mt-10 text-3xl font-bold">Formulaire de contact</h1>
        <form className="Form max-w-md mx-auto mt-10">
            <div className="Name mb-4">
            <label htmlFor="name" className="Nom mb-1 block">Nom</label>
            <input 
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                id="name"
                name="name"
                placeholder="Entrez votre nom"
            />
            </div>
            <div className="Email mb-4">
            <label htmlFor="email" className="Mail mb-1 block">Email</label>
            <input
                className="border border-gray-300 rounded p-2 w-full"
                type="email"
                id="email"
                name="email"
                placeholder="Entrez votre email"
            />
            </div>
            <div className="Message mb-4">
            <label htmlFor="message" className="Msg mb-1 block">Message</label>
            <textarea className="border border-gray-300 rounded p-2 w-full" id="message" name="message" rows="5" placeholder="Pourquoi nous contacter ?" />
            </div>
            <button type="submit" className="btn mb-4 p-4 block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Envoyer</button>
        </form>
        </>
    )
};

export default Table;