function SearchBar({ search, setSearch, setIsOpen }) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Rechercher par nom ou email..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    />
  );
}

export default SearchBar;