# GA4 Conversion Goals & Enhanced Measurement Setup

## Conversion Events to Track

Your website now automatically tracks these conversion events:

### 1. High-Value Conversions
- **`schedule_click`** - Calendly scheduling button clicks (Value: 100)
- **`generate_lead`** - Lead generation events (Value: 200)
- **`conversion`** - General conversion tracking

### 2. Engagement Events  
- **`cta_click`** - Call-to-action button clicks
- **`faq_expand`** - FAQ interaction tracking
- **`voice_demo_start`** - Voice demo engagement (Value: 75)
- **`voice_demo_complete`** - Voice demo completion (Value: 150)

## Setting Up Conversions in GA4

### Step 1: Mark Events as Conversions
1. **Go to GA4** → Admin → Events
2. **Find these events** (they'll appear once users interact):
   - `schedule_click`
   - `generate_lead` 
   - `conversion`
   - `voice_demo_complete`
3. **Toggle "Mark as conversion"** for each event

### Step 2: Create Custom Conversions
1. **Admin** → Conversions → **Create conversion event**
2. **Create these custom conversions**:

```
Event Name: form_submit
Conditions: event_name equals form_submit

Event Name: pricing_page_view  
Conditions: page_location contains /pricing

Event Name: high_value_engagement
Conditions: 
- event_name equals cta_click AND
- value greater_than 50
```

### Step 3: Enhanced Measurement Settings
Already enabled automatically:
- ✅ **Page views** - Basic tracking
- ✅ **Scrolls** - User engagement
- ✅ **Outbound clicks** - External link tracking
- ✅ **Site search** - Search functionality
- ✅ **Video engagement** - Video tracking
- ✅ **File downloads** - Download tracking

## Recommended Goals & Values

### Primary Goals (Mark as Conversions)
1. **Schedule Demo** (`schedule_click`) - Value: 100
   - Most important conversion
   - Direct sales opportunity

2. **Lead Generation** (`generate_lead`) - Value: 200
   - High-value event
   - Voice demo completions, form submissions

3. **Voice Demo Complete** (`voice_demo_complete`) - Value: 150
   - Strong engagement indicator
   - Qualified interest

### Secondary Goals (Track but don't mark as conversions)
1. **FAQ Engagement** (`faq_expand`) - Value: 10
   - Content engagement
   - Interest indicator

2. **CTA Clicks** (`cta_click`) - Value: 25
   - Engagement tracking
   - User intent

## Audiences to Create

### 1. High-Intent Users
- Triggered `schedule_click` OR
- Completed `voice_demo_complete` OR  
- Visited pricing page

### 2. Engaged Users
- 3+ page views OR
- 2+ FAQ interactions OR
- Spent 2+ minutes on site

### 3. Voice Demo Users
- Triggered `voice_demo_start`
- Use for remarketing

## Google Ads Integration

### 1. Import Conversions
- Link GA4 to Google Ads
- Import `schedule_click` as primary conversion
- Import `generate_lead` as secondary conversion

### 2. Remarketing Lists
- Export audiences to Google Ads
- Create campaigns targeting "High-Intent Users"
- Exclude converted users

## Conversion Tracking Verification

### Test These Events:
1. **Schedule Click**: Click any "Book Demo" button
2. **FAQ Interaction**: Expand/collapse FAQ items  
3. **CTA Clicks**: Click contact/pricing buttons
4. **Voice Demo**: Test voice interaction widgets

### Debug View:
1. **GA4** → Configure → DebugView
2. **Add debug parameter**: `?gtm_debug=1` to URL
3. **Watch events** fire in real-time

## Monthly Reporting Focus

### Key Metrics to Track:
1. **Conversion Rate** - schedule_click / sessions
2. **Lead Quality** - generate_lead / total conversions  
3. **Voice Demo Performance** - completion rate
4. **Content Engagement** - FAQ interaction rate
5. **Traffic Quality** - high-intent audience growth

### ROI Tracking:
- Average deal size: $X
- Close rate: Y%
- Expected value per schedule_click: $Z
- Monitor cost-per-conversion trends

---
**Status**: Ready for implementation. Events will start appearing once users interact with the website.