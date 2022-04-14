import React from 'react'
const tasks = [
  {
    id: 1,
    name: 'ontbijten',
    start_date: '14-04-2022',
    end_date: '14-04-2022',
    start_time: '08:00am',
    end_time: '08:30am',
    urgent: false,
  },
  {
    id: 2,
    name: 'brunch',
    start_date: '14-04-2022',
    end_date: '14-04-2022',
    start_time: '11:00am',
    end_time: '13:30pm',
    urgent: false,
  },

]

const Tasks = () => {
  return (
    <div>
      {/* //for each task return a Task */}
      {tasks.map((task) => (
        <h3 key={task.id}>{task.name}</h3>
        ))}
    </div>
  )
}

export default Tasks