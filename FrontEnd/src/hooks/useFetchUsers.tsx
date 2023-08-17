import { useState, useEffect } from 'react';
import { User } from '../interfaces/interface';
import axios from 'axios';

const useFetchUsers = () => {
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/users');
        setUsersData(res.data);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchUsers();
  }, []);

  return usersData;
};

export default useFetchUsers;
