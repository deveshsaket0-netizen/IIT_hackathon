import { Routes, Route } from 'react-router-dom'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import Shop from './pages/shop'
import Profile from './pages/profile'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <main className="flex-1 p-8 max-w-6xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}