import React from 'react';
import './UserList.css'


const UserList=(props)=>{
    return <div className="cardsUser">

            {props.users.map((ele)=>{
   
                
                return  <li>{ele.name}  and age is {ele.age} and collge name is {ele.collage}</li>
                // console.log(ele)  
                
                
            })}
         
        </div>
}
export default UserList;