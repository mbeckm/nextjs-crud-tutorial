import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function UserDashboard() {
  const { userInfo } = useAuth()
  const [addTodo, setAddTodo] = useState(false)
  const [todo, setTodo] = useState("")

  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
      <div className="flex items-stretch">
        <input type="text" placeholder="Enter todo" value={todo} onChange={(e) => setTodo(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-slate-900 flex-1"></input>
        <button className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-70">Add</button>
      </div>
      {userInfo && (
        <>
        </>
      )}
      <button className="text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30">Add Todo</button>
    </div>
  )
}
