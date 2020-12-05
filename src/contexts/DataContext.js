import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sendDataToServer = (user) => {
    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    console.log(usersData);
    const userData = {
      uid: user.uid,
      email: user.email,
      data: {
        count,
      },
    };
    if (usersData.filter((item) => item.uid !== userData.uid)) {
      console.log('new user added to local storage');
      usersData.push(userData);
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
  };

  const getDataFromServer = () => {
    const data = JSON.parse(localStorage.getItem('userData')) || null;
    console.log(data);
    setCount(data.data.count);
  };

  const value = {
    data,
    increment,
    decrement,
    count,
    sendDataToServer,
    getDataFromServer,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
