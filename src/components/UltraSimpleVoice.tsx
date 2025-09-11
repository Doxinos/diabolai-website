'use client'

export default function UltraSimpleVoice() {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: 'Hello! This is your AI voice agent for the Tuesday demo.',
          voiceId: 'pNInz6obpgDQGcFmaJgB'
        }),
      })
      
      if (response.ok) {
        const audioBlob = await response.blob()
        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        audio.play()
      } else {
        alert('Voice API Error: ' + response.status)
      }
    } catch (error) {
      alert('Error: ' + error)
    }
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e40af, #7c3aed)',
      padding: '80px 20px',
      textAlign: 'center',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>
        🤖 AI VOICE AGENT DEMO
      </h2>
      <p style={{ fontSize: '20px', marginBottom: '40px' }}>
        Ready for Tuesday partner presentation
      </p>
      <button
        onClick={handleClick}
        style={{
          background: '#059669',
          color: 'white',
          padding: '20px 40px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        🎤 CLICK TO HEAR AI VOICE
      </button>
    </div>
  )
}