import React, { useEffect, useState } from 'react'
import Table from './Table'


async function getTableData(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then( data => 
       { 
           
           if (data.status != 200 ) throw data.status; 
           else return data;
       })
       .then( (data) => { return data.json() });
}


export default function FetchingTable({ columns, url }) 
{
    const [data, setData] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        
        const d = async () => 
        {
            return await getTableData(url).catch( err => { setError( err.toString() ) } );
        }
        
        d().then(setData).catch( err => { setError( err.toString() ) } );
        
        return () => {
            //cleanup
        };

    }, [url]);

    
    return  <div>{ data === undefined ? "" : <Table columns={columns} data={data} /> }</div>
}