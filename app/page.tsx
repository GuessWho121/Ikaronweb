"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("This is a Vite React project. Please run: npm run dev")
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">RoboTech Website</h1>
        <p className="text-lg text-gray-600 mb-6">This project has been converted to Vite React.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">To run the Vite development server:</p>
          <code className="bg-gray-800 text-green-400 px-3 py-1 rounded">npm run dev</code>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          The main application files are in the <code>/src</code> directory.
        </p>
      </div>
    </div>
  )
}
