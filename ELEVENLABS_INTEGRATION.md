# ElevenLabs Voice Agent Integration Guide

## Overview
This document details the complete process of integrating ElevenLabs conversational AI voice agents into the DiabolAI website for the Tuesday partner demo.

## Prerequisites
- ElevenLabs account with API access
- Conversational AI agent created in ElevenLabs dashboard
- Next.js 14 application
- Vercel deployment setup

## Installation Steps

### 1. ElevenLabs Setup
1. Create account at [ElevenLabs](https://elevenlabs.io)
2. Navigate to Conversational AI section
3. Create new agent with ID: `agent_1201k4ydfevsfbmavzyz4j73mcdx`
4. Get API key from account settings

### 2. Environment Variables
Add to `.env.local`:
```env
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
NEXT_PUBLIC_AGENT_ID=agent_1201k4ydfevsfbmavzyz4j73mcdx
```

### 3. Vercel Environment Setup
**CRITICAL**: Add environment variables to Vercel dashboard:
1. Go to Vercel project → Settings → Environment Variables
2. Add `ELEVENLABS_API_KEY` with your API key
3. Add `NEXT_PUBLIC_AGENT_ID` with agent ID
4. Apply to Production, Preview, and Development

### 4. Code Implementation

#### A. Global Widget Setup (layout.tsx)
Add to `src/app/layout.tsx` before closing `</body>` tag:

```tsx
{/* ElevenLabs Floating Voice Agent Widget */}
<div dangerouslySetInnerHTML={{
  __html: '<elevenlabs-convai agent-id="agent_1201k4ydfevsfbmavzyz4j73mcdx"></elevenlabs-convai>'
}} />

<script
  src="https://unpkg.com/@elevenlabs/convai-widget-embed"
  type="text/javascript"
  async
></script>
```

#### B. Display Component (ElevenLabsOfficialWidget.tsx)
Created custom component with:
- Demo instructions
- Sample conversation prompts
- Feature highlights
- No inline widget (to avoid conflicts)

### 5. Package Dependencies
Install required packages:
```bash
npm install @elevenlabs/elevenlabs-js
```

## Troubleshooting Issues Encountered

### Issue 1: "Conversation Failed" Error
**Cause**: Missing ELEVENLABS_API_KEY in Vercel environment variables
**Solution**: Add API key to Vercel dashboard environment variables

### Issue 2: Widget Not Appearing
**Cause**: Components not rendering in production
**Solution**: 
- Clear Vercel deployment cache
- Create new branch and redeploy
- Force new deployment

### Issue 3: Widget Stuck in Static Position
**Cause**: Widget embedded in component instead of globally
**Solution**: Move widget code to `layout.tsx` for global floating behavior

### Issue 4: Production Branch Issues
**Cause**: Wrong branch set as production in Vercel
**Solution**: 
1. Go to Vercel → Project Settings → Production Branch
2. Change from "main" to desired branch (e.g., "tuesday-demo-final")
3. Save and redeploy

## Final Working Configuration

### File Structure
```
src/
├── app/
│   ├── layout.tsx          # Global widget embed
│   ├── page.tsx            # Main page with component
│   └── api/
│       └── tts/
│           └── route.ts    # Server-side TTS API
├── components/
│   └── ElevenLabsOfficialWidget.tsx  # Demo section
└── .env.local              # Local environment variables
```

### Widget Behavior
- Appears as floating button in bottom-right corner
- Follows user as they scroll
- Clickable to start voice conversation
- Works across entire website

## Testing Checklist
- [ ] Widget appears on page load
- [ ] Widget floats in bottom-right corner
- [ ] Widget follows scrolling
- [ ] Voice conversation starts on click
- [ ] API key working (no "conversation failed" error)
- [ ] Works in production environment

## Demo Questions for Tuesday
Suggested conversation starters for partner demo:
- "What services does DiabolAI offer?"
- "How can AI help automate my business?"
- "What's the pricing for AI voice agents?"
- "Tell me about your implementation process"

## Branch Management
- **Development**: `feat/alt-landing`
- **Demo Branch**: `tuesday-demo-final`
- **Production**: Set `tuesday-demo-final` as production branch in Vercel

## Key Learnings
1. **Global widget placement** is crucial for floating behavior
2. **Environment variables** must be set in Vercel dashboard, not just locally
3. **Branch management** in Vercel affects which code is deployed to production URL
4. **ElevenLabs official widget** is more reliable than custom React implementations
5. **Deployment caching** can cause issues - sometimes need fresh branch/deployment

## Success Metrics
✅ Floating voice widget working
✅ Real-time voice conversation
✅ Production deployment successful
✅ Ready for Tuesday partner demo