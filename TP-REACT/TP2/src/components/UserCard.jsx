function UserCard({ user }) {
  return (
    <li className="user-item">
      <img
        src={user.picture.medium}
        alt={`Photo de ${user.name.first} ${user.name.last}`}
      />
      <div>
        <p className="user-name">
          {user.name.first} {user.name.last}
        </p>
        <p className="user-email">{user.email}</p>
      </div>
    </li>
  );
}

export default UserCard;