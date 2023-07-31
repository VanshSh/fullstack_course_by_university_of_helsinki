import React from 'react'

const NewNameForm = (props) => {
  const {
    newName,
    number,
    addNameHandler,
    nameChangeHandler,
    numberChangeHandler,
  } = props
  return (
    <form onSubmit={addNameHandler}>
      <div>
        name:{' '}
        <input
          required
          type='text'
          value={newName}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        number:{' '}
        <input
          required
          type='text'
          value={number}
          onChange={numberChangeHandler}
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default NewNameForm
