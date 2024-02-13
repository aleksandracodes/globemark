import styles from './User.module.css';

const FAKE_USER = {
  name: 'Laura',
  email: 'laura@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=ac',
};

function User() {
  const user = FAKE_USER;

  function handleClick() {}

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
