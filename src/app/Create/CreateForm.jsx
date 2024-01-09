"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
 
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newEmail = { email }

    const res = await fetch('app/data', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newEmail)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/emails')
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Email:</span>
        <input
          required 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
     
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Ticket</span>}
    </button>
    </form>
  )
}