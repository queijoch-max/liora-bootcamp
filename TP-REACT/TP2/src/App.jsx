import { useState } from "react";
import useFetch from "./hooks/useFetch";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useFetch("https://randomuser.me/api/?results=5&nat=fr,gb,us");

  if (loading) return <p className="message">Chargement des utilisateurs...</p>;
  if (error) return <p className="message">Erreur : {error.message}</p>;
  if (!data) return null;

  const visibleUsers = data.results.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last} ${user.email}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <main className="container">
      <h1>Liste des utilisateurs</h1>

      <div className="search-box">
        <SearchBar search={search} setSearch={setSearch} setIsOpen={setIsOpen} />

        {isOpen && (
          <ul className="users-list">
            {visibleUsers.length === 0 ? (
              <li className="message">Aucun utilisateur trouvé.</li>
            ) : (
              visibleUsers.map((user) => (
                <UserCard key={user.login.uuid} user={user} />
              ))
            )}
          </ul>
        )}
      </div>
    </main>
  );
}

export default App;