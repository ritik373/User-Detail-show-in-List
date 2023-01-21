import React from 'react';
import AddUsers from './components/addUsers/AddUsers' 
import UserList from './components/addUsers/UserList'
import { useState } from 'react';

const App=()=>{
    const [userListArray,setUserList] = useState([]);

     const onAddUsersHandler=(Username,Userage,UserCollagename)=>{

        setUserList([...userListArray,{name:Username,age:Userage ,collage:UserCollagename,id:Math.random().toString()}] )
            console.log(userListArray);

     }
    return <div>
    
    <AddUsers onAddUsers={onAddUsersHandler} />
    
    <UserList  users={userListArray}/>

    </div>
  
    
    

}
export default App;