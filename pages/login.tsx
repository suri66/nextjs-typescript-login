import type { NextPage } from 'next';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Login: NextPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLoginClick = () => {
      console.log('username', username);
      console.log('password', password);
      // make api call here.. in the api reponse redirect to home/index page
  }

  return (
    <div className={styles.main}>
      Username:{' '}
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      Password:{' '}
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <input type="button" value="Login" onClick={onLoginClick} />
    </div>
  );
};

export default Login;
