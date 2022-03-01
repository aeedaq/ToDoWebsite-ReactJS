import React, {useState} from "react";
import PropTypes from 'prop-types'

const styles = {
    inputForm : {
    padding: '1rem',
    marginBottom: '1rem'
  },

  userInput : {
    width : '85%',
    border: '1px solid grey',
    borderRadius: '5px',
    height: '25px'
  },

  button : {
    height: '30px',
    backgroundColor: 'lightgreen',
    border: 'none',
    borderRadius: '5px',
    marginLeft: '5%',
    color: 'white',
  }
}



function AddTodo({ onCreate }){

  const [value, setValue] = useState('')

  function submitHandler(event) {
  event.preventDefault()

    if (value.trim()){
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form style = {styles.inputForm} onSubmit = {submitHandler} >
      <input 
        placeholder={'Go to therapy'} 
        style = {styles.userInput} 
        value = {value} 
        onChange = {event => setValue(event.target.value)} 
      />

      <button style={styles.button} type='submit'>ADD</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo
