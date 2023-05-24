import React, { FC, FormEvent, useRef, useState } from 'react'

type NewTaskFormProps = {
  onSubmit: (task: string) => void,
}

const NewTaskForm: FC<NewTaskFormProps> = ({ onSubmit }) => {

  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (!inputRef.current) return;
    if (!text) return;
    onSubmit(text);
    inputRef.current.value = '';
    setText('');
  }

  function onInputChange() {
    if (!inputRef.current) return;
    setText(inputRef.current.value);
  }

  return (
    <div className='mt-3'>
      <h5>Create a new task</h5>
      <form className='input-group mb-3' onSubmit={onFormSubmit}>
        <input className='form-control' onChange={onInputChange} ref={inputRef} />
        <button className='btn btn-outline-primary'>
          Add
        </button>
      </form>
    </div>
  )
}

export default NewTaskForm