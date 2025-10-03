export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
      /* Critical styles for above-the-fold content */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
      }
      
      body {
        background-color: #000;
        color: #fff;
        font-family: Roboto, system-ui, -apple-system, sans-serif;
        font-feature-settings: "rlig" 1, "calt" 1;
      }
      
      /* Hero section critical styles */
      #hero {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding-top: 4rem;
      }
      
      /* Navigation critical styles */
      header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 50;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        height: 4rem;
        max-width: 1400px;
        margin: 0 auto;
      }
      
      /* Button critical styles */
      .btn-primary {
        background-color: #fff;
        color: #000;
        font-weight: 500;
        padding: 1rem 2rem;
        border-radius: 9999px;
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: background-color 0.3s ease;
      }
      
      .btn-primary:hover {
        background-color: #f3f4f6;
      }
      
      /* Video styles */
      video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      /* Text critical styles */
      h1 {
        font-size: 3.75rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 1rem;
      }
      
      @media (min-width: 768px) {
        h1 {
          font-size: 4.5rem;
        }
      }
      
      @media (min-width: 1024px) {
        h1 {
          font-size: 6rem;
        }
      }
      
      .silver-gradient {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      /* Hide non-critical content initially */
      .defer-load {
        opacity: 0;
      }
      `
    }} />
  )
}