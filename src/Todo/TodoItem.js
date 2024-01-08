import React, {useContext} from 'react'
import Context from '../context'

export default function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    // default value of <input type="date"/>
    let date = new Date().toISOString().substr(0, 10)

    return (
        <li>
            <span className={classes.join(' ')}>
                <input 
                    type="checkbox" 
                    checked={todo.completed}
                    style={{marginRight: '5px'}}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <span>
                <input type="date" defaultValue={date}/>
                <input type="time"/>
            </span>
            <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}