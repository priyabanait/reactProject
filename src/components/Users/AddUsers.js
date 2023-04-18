
import React,{useState} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

export default function AddUsers(props) {
  const[enterName,setEnterName]=useState('');
  const[enterAge,setEnterAge]=useState('');
  const[error,setError]=useState()
    function UserHandler(event){
        event.preventDefault();
  
        if(enterName.trim().length===0 ||enterAge.trim().length===0){
          setError({title:'Invalid input',
          message:'Please enter valid name and age(no empty values)'})
return;
        }
        if(+enterAge<1){
          setError({title:'Invalid age',
          message:'Please enter a valid age(> 0)'})
          return;
        }
  
      props.onAddUser(enterName, enterAge);
      setEnterAge('');
      setEnterName('');
    }
    function NameChangeHandler(event){
      setEnterName(event.target.value);
    }
    function AgeChangeHandler(event){
      setEnterAge(event.target.value);
    }
    function errorHandler(){
      setError(null)
    }
  return (
    <div>
    {error &&<ErrorModal title={error.title} message={error.message} onErrorHandle={errorHandler}
    ></ErrorModal>}
    <Card className={classes.input}>

      <form onSubmit={UserHandler}>
        <label htmlFor='name'>Username:</label>
        <input type='text' id='name' name='name' value={enterName} onChange={NameChangeHandler}></input>
        <label htmlFor='age'>Age(Years)</label>
        <input type='number' id='age' name='age'value={enterAge} onChange={AgeChangeHandler}></input>
        <Button type='submit'>Add User</Button>
      </form>
    
    </Card>
    </div>
   
  )
}
