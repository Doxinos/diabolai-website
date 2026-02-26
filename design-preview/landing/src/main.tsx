import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './App'
import AIContentPage from './pages/AIContent'
import AIVoicePage from './pages/AIVoice'
import AIAvatarsPage from './pages/AIAvatars'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-content" element={<AIContentPage />} />
        <Route path="/ai-voice" element={<AIVoicePage />} />
        <Route path="/ai-avatars" element={<AIAvatarsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
