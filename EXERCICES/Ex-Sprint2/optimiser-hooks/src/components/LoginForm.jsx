import React, { useEffect, useRef } from 'react';

export default function LoginForm() {

    const usernameInputRef = useRef(null);

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

  return (
    <form>
      <label>
        Nom d'utilisateur:
        <input type="text" ref={usernameInputRef} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" />
      </label>
    </form>
  );
}