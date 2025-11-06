import { useEffect, useState } from 'react'

export default function TaskList() {
    //
    const [tasks, setTasks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect (() => {
        fetchTasks(setTasks, setLoading)
    });

    return (
        <section>
            <h2>LIST OF TASKS</h2>
            <button onClick={() => fetchTasks(setTasks)}>REFRESH TASK LIST</button>
            <ul>
                {isLoading ? <li>LOADING....</li> :
                    tasks.map(t=> <li>
                    {t.description}
                    {t.completed ? ' ☑️' : ' ⏳'}
                </li>)}
            </ul>
        </section>
    )
}

async function fetchTasks(setTasks, setLoading) {
    const res = await fetch('http://127.0.0.1:8000/api/task_list');
    const myJson = await res.json()
    setTasks(myJson)
    setLoading(false)
}