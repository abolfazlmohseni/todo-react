import React, { useState } from 'react'
const App = () => {
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: "test",
        status: "notComplate"
      },
      {
        id: 2,
        text: "test 2",
        status: "complate"
      },
    ]
  );
  const changeStatusTask = (taskId) => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === taskId ? { ...todo, status: todo.status === "complate" ? "notComplate" : "complate" } : todo
      )
    )
  }
  return (
    <div className='bg-zinc-700 h-screen flex'>
      <div className='shadow-2xl shadow-blue-500/20 w-1/4 mr-5 mt-[5%] h-4/5 rounded-xl flex flex-col items-center gap-1.5'>
        <div className='flex items-center gap-3 w-5/6'>
          <div className="bg-blue-600 rounded-full w-28 h-28 text-center content-center text-white text-xl ">
            <p>25%</p>
          </div>
          <p className='text-white text-lg'>هنوز کار داری که باید انجام بشه</p>
        </div>
        <div className='text-zinc-300 w-5/6 mt-10 space-y-2'>
          {todos.map((todo) => {
            return (
              <div className={`flex w-full justify-between border rounded-lg items-center py-0.5 px-2 border-stone-300/40 group ${todo.status === "complate" ? "brightness-75":""}`} key={todo.id}>
                <div className='flex gap-2 items-center text-xl'>
                  <div>
                    <svg onClick={() => changeStatusTask(todo.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='cursor-pointer' viewBox="0 0 16 16">
                      <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" />
                    </svg>
                  </div>
                  <p className={` ${todo.status === "complate" ? "line-through text-gray-400" : "text-white"}`}>{todo.text}</p>
                </div>
                <div className='flex text-gray-400 gap-1.5 opacity-0 group-hover:opacity-100 transition-all'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-pointer" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-pointer" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      <div></div>
    </div>
  )
}
export default App