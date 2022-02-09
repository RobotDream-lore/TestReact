import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import useToken from './hooks/useToken';
import Logout from './components/Logout';
import React from 'react'
import FetchingTable from './components/FetchingTable';

function App() {
  
  const multimedia_columns = React.useMemo(
    () => [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Preview',
            accessor: 'preview',
            className: "preview",
        },
        {
            Header: 'Creation Date',
            accessor: 'creation_date',
        },
        {
            Header: 'Last Modify',
            accessor: 'last_modify',
        },
        ],
    []
  )
  const data = React.useMemo(() => { return [{title:"diocan", preview:"audio", creation_date:"aaa", last_modify:"aaaaa"}] },[] );

  const {token, setToken, clearToken } = useToken();
  
  return (
    <div>
      { token !== undefined ?
        <div> 
          <Logout clearToken={clearToken} /> 
          <FetchingTable columns={multimedia_columns} url='http://127.0.0.1:8000/adamanager/multimedia'/>
        </div> : 
        <Login setToken={setToken} /> }
    </div> 
  );
}

export default App;
