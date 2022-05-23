import { useState } from "react"
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState (false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('タスクを入力してください。')
            return
        }

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)


    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>タスク</label>
            <input type = 'text' 
            placeholder='追加' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>日程</label>
            <input type = 'text' 
            placeholder='日程追加' 
            value={day} 
            onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>リマインダー</label>
            <input type = 'checkbox' 
            checked={reminder}
            placeholder='タスク追加' 
            value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value ='Save Task' className='btn btn-block'/>
      
    </form>
  )
}

export default AddTask
