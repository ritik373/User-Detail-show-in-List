import React, { useRef } from 'react';
import { useState } from 'react';
import Card from '../cardsArea/Cards';
import ErrorModel from  '../Model/ErrorModel'


const AddUsers = (props) => {
    const collageInputRef =useRef();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isValidName, setisValidName] = useState(true);
    const [isValidAge, setisValidAge] = useState(true);
    const [isValidCollage, setisValidCollage] = useState(true);

    const [error, setError]=useState();



    const onNameHandler = (event) => {
        setName(event.target.value);
        setisValidName(true)

    }
    const onAgeHandler = (event) => {
        setAge(event.target.value);
        setisValidAge(true)


    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log('clicked')
        if (name.trim().length === 0 || age.trim().length === 0 ) {
         
            setisValidName(false)
            setError({title:"Something Went Wrong!",message:"Please Enter Right Name"})
            return;
        }
        if (+age < 1) {
            setisValidAge(false)
            setError({title:"Something Went Wrong!",message:"Please Enter Right Age"})
            return;
        }
        if(collageInputRef.current.value=== ''){
            setisValidCollage(false)
            setError({title:"Something Went Wrong!",message:"Please Enter the length of collage name (0<collageName)"})
            return;

        }
        // setUserList(...userList, { name: name, age: age, id: Math.random().toString() })
        props.onAddUsers(name, age ,collageInputRef.current.value);
        setError(null)
        // console.log(userList)
        setAge('')
        setName('')
        collageInputRef.current.value='';


    }
    function modelErrorHandler(){
        setError(null);

    }
    return(
        <div>

       { error &&<ErrorModel 
         title={error.title}
         message={error.message}
        onConfirm={modelErrorHandler}
        
         />}
    
    <div className="cards">
         <form onSubmit={onSubmitHandler}>
            <label htmlFor="name" style={{ color: !isValidName ? 'red' : 'black' }}>UserName</label>
            <input type="text" name="" id="name" onChange={onNameHandler} value={name} />
            <label htmlFor="" style={{ color: !isValidAge ? 'red' : 'black' }}>MAX-AGE(Year)</label>
            <input type="number" name="" id="age" onChange={onAgeHandler} value={age} />
            <label htmlFor="" style={{ color: !isValidAge ? 'red' : 'black' }}>Collage Name</label>
            <input type="text" name="" id="age"   ref={collageInputRef} />
            <button type="submit">Add Users</button>
        </form>
        </div>

        </div>

    )
  


}
export default AddUsers;