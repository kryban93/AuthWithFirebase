import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import { useAuth } from '../../contexts/AuthContext';
import { useData } from '../../contexts/DataContext';
import { useHistory } from 'react-router-dom';
import Counter from '../../components/Counter/Counter';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const { sendDataToServer, getDataFromServer } = useData();
  const history = useHistory();

  useEffect(() => {
    //getDataFromServer();
    return () => {
      sendDataToServer(currentUser);
    };
  }, []);

  const handleLogOut = async () => {
    try {
      setError('');
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Log Out');
    }
  };
  return (
    <section className='wrapper'>
      <header className='header'>
        <h1 className='title'>This is Dashboard View</h1>
      </header>
      <div className='profile'>
        <h3 className='profile_title'>Profile</h3>
        {error && <p>{error}</p>}
        <p className='profile_email'>
          <strong>email:</strong> {currentUser.email}
        </p>

        <button className='btn btn-update'> update profile</button>
      </div>
      <Counter />
      <button onClick={handleLogOut} className='btn btn-logout'>
        log out
      </button>
    </section>
  );
};

export default Dashboard;
