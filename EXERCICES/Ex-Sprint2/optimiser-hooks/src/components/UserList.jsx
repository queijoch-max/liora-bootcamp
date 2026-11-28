import React, { useState, useCallback } from 'react';

const USERS = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const UserItem = React.memo(({ user, onDelete }) => {
  console.log(`Rendu de l'utilisateur : ${user.name}`);
  return (
    <li>
      {user.name}
      <button onClick={() => onDelete(user.id)}>Supprimer</button>
    </li>
  );
});

export default function UserList() {
  const [users, setUsers] = useState(USERS);
  const [filter, setFilter] = useState('');

  const handleDelete = useCallback((userId) => {
    setUsers(currentUsers => currentUsers.filter(user => user.id !== userId));
  }, []);

  const visibleUsers = users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filtrer..." />
      <ul>
        {visibleUsers.map(user => (
          <UserItem key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
