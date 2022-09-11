import { useEffect, useState } from 'react';
import { http } from './api';
import './App.css';

function App() {
  const [data, setData] = useState({});

  const getData = async() => {
    const data = await http('http://localhost:3001/api/users', 'GET');
    console.log(data);
  }

  useEffect( () => {
    getData();
  }, [])

  return (
    <h1>APP</h1>
  );
}

export default App;
