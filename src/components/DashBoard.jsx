import React from 'react';
import { useEffect, useState } from "react";


const DashBoard = () => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCutomerData();
    }, []);

const getCutomerData = async()=>{
    try{
        const data = await fetch('https://dummyjson.com/users');
        const parsedData = await data.json();
        console.log(parsedData.users);  
        setUserData(parsedData.users);
        setError(false);
    }catch(err){
        console.log("Error while fetching the data", err);
        setError(true);
    }
    
}

if(error){
    return <div>Something went wrong</div>
}
  return (
    <div className="flex flex-wrap">
        {userData.length >0 && userData.map((user) => 
         (
            <div>{user.firstName}</div>



            
        )

        )}
      
    </div>
  )
}

export default DashBoard;
