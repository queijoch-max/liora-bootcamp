function App() {
  return (
    <div className="text-center">
      <header className="bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold">
          Bienvenue sur mon application React avec Tailwind CSS
        </h1>
        <p className="mt-4">
          Cette application utilise Tailwind CSS pour le style !
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Cliquez ici
        </button>
      </header>
    </div>
  );
}

export default App;