
import React,{useState,useRef} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

export default function AddUsers(props) {
const nameInputRef=useRef();
const ageInputRef=useRef();
const collegeNameRef=useRef();

  
  const[error,setError]=useState()
  
    function UserHandler(event){
        event.preventDefault();
        let enteredName=nameInputRef.current.value;
        let enteredUserAge=ageInputRef.current.value;
        let  enterUserCollege=collegeNameRef.current.value;
        
  
        if(enteredName.trim().length===0 ||enteredUserAge.trim().length===0||enterUserCollege.trim().length===0){
          setError({title:'Invalid input',
          message:'Please enter valid name and age(no empty values)'})
         return;
        }
        if(+enteredUserAge<1){
          setError({title:'Invalid age',
          message:'Please enter a valid age(> 0)'})
          return;
        }
  
      props.onAddUser(enteredName, enteredUserAge,enterUserCollege);
      nameInputRef.current.value="";
      ageInputRef.current.value="";
      collegeNameRef.current.value="";
    }
    
    function errorHandler(){
      setError(null)
    }
  return (
    <Wrapper>
    {error &&(<ErrorModal title={error.title} message={error.message} onErrorHandle={errorHandler}
    ></ErrorModal>)}
    <Card className={classes.input}>

      <form onSubmit={UserHandler}>
        <label htmlFor='name'>Username:</label>
        <input type='text' id='name' name='name' ref={nameInputRef}></input>
        <label htmlFor='age'>Age(Years)</label>
        <input type='number' id='age' name='age' ref={ageInputRef}></input>
        <label htmlFor='college'>College Name:</label>
        <input type='text' id='college' name='college' ref={collegeNameRef}></input>
        <Button type='submit'>Add User</Button>
      </form>
    
    </Card>
    </Wrapper>
   
  )
}
