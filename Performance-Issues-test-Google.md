Performance Issues test with Google Page speed Insights

agnose performance issues
76
Performance
94
Accessibility
100
Best Practices
100
SEO
76
FCP
+5
LCP
+10
TBT
+30
CLS
+25
SI
+7
Performance
Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.
0–49
50–89
90–100
Final Screenshot

METRICS
Expand view
First Contentful Paint
3.1 s
Largest Contentful Paint
4.4 s
Total Blocking Time
60 ms
Cumulative Layout Shift
0
Speed Index
4.9 s
Captured at Oct 1, 2025 at 2:21 PM GMT+2
Emulated Moto G Power with Lighthouse 12.8.2
Single page session
Initial page load
Slow 4G throttling
Using HeadlessChromium 137.0.7151.119 with lr
View Treemap
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Later this year, insights will replace performance audits. Learn more and provide feedback here.
Go back to audits
Show audits relevant to:

All

FCP

LCP

TBT

CLS
INSIGHTS
Render blocking requests Est savings of 600 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.LCPFCP
  Show 3rd-party resources (1)
URL
Transfer Size
Duration
diabolai.com 1st Party
11.4 KiB	660 ms
…css/03511694e7d11b1c.css(www.diabolai.com)
2.3 KiB
180 ms
…css/b189eb4178fe0346.css(www.diabolai.com)
9.2 KiB
480 ms
Calendly Other
1.8 KiB	780 ms
…external/widget.css(assets.calendly.com)
1.8 KiB
780 ms
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.
Top function call
Total reflow time
/gtag/js?id=G-W971B3WD3H:778:135(www.googletagmanager.com)
62 ms
Source
Total reflow time
/gtag/js?id=G-W971B3WD3H:775:14(www.googletagmanager.com)
62 ms
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCP
Maximum critical path latency: 1,575 ms
Initial Navigation
https://www.diabolai.com - 255 ms, 10.26 KiB
…external/widget.css(assets.calendly.com) - 304 ms, 1.78 KiB
…css/03511694e7d11b1c.css(www.diabolai.com) - 606 ms, 2.26 KiB
…media/ac3b7908202f8517-s.woff2(www.diabolai.com) - 1,575 ms, 35.38 KiB
…media/627d916fd739a539-s.woff2(www.diabolai.com) - 1,201 ms, 16.85 KiB
…css/b189eb4178fe0346.css(www.diabolai.com) - 538 ms, 9.19 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
no origins were preconnected
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Use efficient cache lifetimes Est savings of 6 KiB
A long cache lifetime can speed up repeat visits to your page. Learn more.LCPFCP
Request
Cache TTL
Transfer Size
Calendly Other
6 KiB
…external/widget.js(assets.calendly.com)
5m
4 KiB
…external/widget.css(assets.calendly.com)
5m
2 KiB
Legacy JavaScript Est savings of 12 KiB
Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support older browsers. Learn why most sites can deploy ES6+ code without transpilingLCPFCP
URL
Wasted bytes
diabolai.com 1st Party
11.7 KiB
…chunks/472-4a4ed842288fadc9.js(www.diabolai.com)
11.7 KiB
…chunks/472-4a4ed842288fadc9.js:1:1337(www.diabolai.com)
Array.prototype.at
…chunks/472-4a4ed842288fadc9.js:1:725(www.diabolai.com)
Array.prototype.flat
…chunks/472-4a4ed842288fadc9.js:1:838(www.diabolai.com)
Array.prototype.flatMap
…chunks/472-4a4ed842288fadc9.js:1:1214(www.diabolai.com)
Object.fromEntries
…chunks/472-4a4ed842288fadc9.js:1:467(www.diabolai.com)
String.prototype.trimEnd
…chunks/472-4a4ed842288fadc9.js:1:382(www.diabolai.com)
String.prototype.trimStart
Layout shift culprits
Optimize DOM size
LCP breakdown
3rd parties
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
DIAGNOSTICS
Reduce unused JavaScript Est savings of 74 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.LCPFCP
  Show 3rd-party resources (1)
URL
Transfer Size
Est Savings
Google Tag Manager Tag-Manager
137.1 KiB	54.0 KiB
/gtag/js?id=G-W971B3WD3H(www.googletagmanager.com)
137.1 KiB
54.0 KiB
diabolai.com 1st Party
37.1 KiB	20.1 KiB
…chunks/974-ee0519b8df3fd89d.js(www.diabolai.com)
37.1 KiB
20.1 KiB
Avoid serving legacy JavaScript to modern browsers Est savings of 11 KiB
Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support legacy browsers. Learn why most sites can deploy ES6+ code without transpilingLCPFCP
URL
Est Savings
diabolai.com 1st Party
11.4 KiB
…chunks/472-4a4ed842288fadc9.js(www.diabolai.com)
11.4 KiB
…chunks/472-4a4ed842288fadc9.js:1:1337(www.diabolai.com)
Array.prototype.at
…chunks/472-4a4ed842288fadc9.js:1:725(www.diabolai.com)
Array.prototype.flat
…chunks/472-4a4ed842288fadc9.js:1:838(www.diabolai.com)
Array.prototype.flatMap
…chunks/472-4a4ed842288fadc9.js:1:1214(www.diabolai.com)
Object.fromEntries
…chunks/472-4a4ed842288fadc9.js:1:467(www.diabolai.com)
String.prototype.trimEnd
…chunks/472-4a4ed842288fadc9.js:1:382(www.diabolai.com)
String.prototype.trimStart
Avoid enormous network payloads Total size was 23,152 KiB
Large network payloads cost users real money and are highly correlated with long load times. Learn how to reduce payload sizes.
  Show 3rd-party resources (1)
URL
Transfer Size
diabolai.com 1st Party
22,896.3 KiB
…backgrounds/soundwave-ai-voice.mp4(www.diabolai.com)
11,151.1 KiB
/ai-voice-agent-business-transformation-demo.mp4(www.diabolai.com)
9,699.0 KiB
…backgrounds/soundwave….mp4(www.diabolai.com)
1,828.6 KiB
…chunks/fd9d1056-b3a8d9cf9e5ca59d.js(www.diabolai.com)
54.3 KiB
…chunks/974-ee0519b8df3fd89d.js(www.diabolai.com)
37.9 KiB
…media/ac3b7908202f8517-s.woff2(www.diabolai.com)
35.4 KiB
…media/47cbc4e2adbc5db9-s.p.woff2(www.diabolai.com)
34.5 KiB
…chunks/472-4a4ed842288fadc9.js(www.diabolai.com)
33.4 KiB
/_next/image?url=…(www.diabolai.com)
22.1 KiB
Google Tag Manager Tag-Manager
137.8 KiB
/gtag/js?id=G-W971B3WD3H(www.googletagmanager.com)
137.8 KiB
Avoid long main-thread tasks 2 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBT
URL
Start Time
Duration
Google Tag Manager Tag-Manager
157 ms
/gtag/js?id=G-W971B3WD3H(www.googletagmanager.com)
3,212 ms
82 ms
/gtag/js?id=G-W971B3WD3H(www.googletagmanager.com)
3,294 ms
75 ms
