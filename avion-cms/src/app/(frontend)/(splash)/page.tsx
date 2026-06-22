import React from 'react'
import Link from 'next/link'

export default function SplashPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
            --accent-color: #ffb400;
            --accent-glow: rgba(255, 180, 0, 0.25);
            --bg-dark: #0a0a0d;
            --bg-card: rgba(255, 255, 255, 0.03);
            --border-card: rgba(255, 255, 255, 0.06);
            --text-primary: #ffffff;
            --text-secondary: #a0a0ab;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 20% 30%, rgba(255, 180, 0, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255, 180, 0, 0.03) 0%, transparent 40%),
                linear-gradient(135deg, #101014 0%, #050507 100%);
            background-attachment: fixed;
        }

        .grid-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.15;
            background-image: 
                linear-gradient(45deg, #ffffff 1px, transparent 1px),
                linear-gradient(-45deg, #ffffff 1px, transparent 1px);
            background-size: 80px 80px;
        }

        header {
            width: 100%;
            padding: 40px 20px;
            text-align: center;
            z-index: 10;
        }

        .logo-container {
            margin-bottom: 25px;
            animation: fadeInDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .logo-img {
            max-width: 280px;
            height: auto;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }

        .brand-title {
            font-size: 3.2rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #ffffff 60%, var(--accent-color) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: fadeIn 1s ease-out;
        }

        .brand-subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary);
            font-weight: 400;
            letter-spacing: 4px;
            text-transform: uppercase;
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            padding-bottom: 20px;
            animation: fadeIn 1.2s ease-out;
        }

        .brand-subtitle::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: var(--accent-color);
            border-radius: 2px;
            box-shadow: 0 0 10px var(--accent-color);
        }

        main {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 20px 40px;
            z-index: 10;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
        }

        .portal-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            width: 100%;
            margin-top: 20px;
            margin-bottom: 40px;
        }

        .portal-card {
            background: var(--bg-card);
            border: 1px solid var(--border-card);
            border-radius: 12px;
            padding: 30px;
            text-decoration: none;
            color: var(--text-primary);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }

        .portal-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, transparent 70%, rgba(255, 180, 0, 0.05) 100%);
            transition: opacity 0.4s ease;
            opacity: 0;
        }

        .portal-card-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 18px;
        }

        .portal-icon {
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
            transition: all 0.4s ease;
            box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.02);
        }

        .portal-icon svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .portal-title {
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            transition: color 0.3s ease;
        }

        .portal-desc {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 25px;
            font-family: 'Hind', sans-serif;
        }

        .portal-action {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--text-primary);
            transition: all 0.3s ease;
            margin-top: auto;
        }

        .portal-action i {
            transition: transform 0.3s ease;
            color: var(--accent-color);
        }

        .portal-card:hover {
            transform: translateY(-8px);
            border-color: var(--accent-color);
            box-shadow: 
                0 15px 40px rgba(0,0,0,0.5),
                0 0 20px var(--accent-glow);
        }

        .portal-card:hover::before {
            opacity: 1;
        }

        .portal-card:hover .portal-icon {
            background: var(--accent-color);
            color: #000;
            border-color: var(--accent-color);
            box-shadow: 0 0 15px var(--accent-glow);
        }

        .portal-card:hover .portal-title {
            color: var(--accent-color);
        }

        .portal-card:hover .portal-action {
            color: var(--accent-color);
        }

        .portal-card:hover .portal-action i {
            transform: translateX(6px);
        }

        .enter-btn {
            background: linear-gradient(135deg, var(--accent-color) 0%, #e59a00 100%);
            color: #000000;
            padding: 16px 45px;
            font-size: 1.1rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(255, 180, 0, 0.3);
            display: inline-flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
            margin-top: 15px;
        }

        .enter-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(255, 180, 0, 0.5);
            background: linear-gradient(135deg, #ffc433 0%, #ffb400 100%);
        }

        .enter-btn i {
            transition: transform 0.3s ease;
        }

        .enter-btn:hover i {
            transform: translateX(4px);
        }

        footer {
            width: 100%;
            padding: 30px 20px;
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            z-index: 10;
            background: rgba(10, 10, 13, 0.8);
            font-family: 'Hind', sans-serif;
        }

        @media (max-width: 992px) {
            .portal-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
            .brand-title {
                font-size: 2.6rem;
            }
        }

        @media (max-width: 600px) {
            .portal-grid {
                grid-template-columns: 1fr;
                gap: 18px;
            }
            .brand-title {
                font-size: 2.1rem;
            }
            .brand-subtitle {
                font-size: 1rem;
                letter-spacing: 2px;
            }
            header {
                padding: 30px 15px 15px;
            }
            main {
                padding: 10px 15px 30px;
            }
            .portal-card {
                padding: 25px;
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
      `}} />

      <div className="grid-overlay"></div>

      <header>
        <div className="logo-container">
          <img className="logo-img" src="https://avionsteel.ca/api/media/file/Avion-Steel-Logo.webp" alt="Avion Steel Group Inc Logo" />
        </div>
        <h1 className="brand-title">Avion Steel Group Inc</h1>
        <p className="brand-subtitle">Structural Steel Fabrication &amp; Erection</p>
      </header>

      <main>
        <div className="portal-grid">
          
          <Link href="/home" className="portal-card">
            <div>
              <div className="portal-card-header">
                <div className="portal-icon">
                  <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <h2 className="portal-title">Home Page</h2>
              </div>
              <p className="portal-desc">Welcome to Avion Steel Group Inc. Built to support steel scopes with clarity, precision, and accountability across every phase.</p>
            </div>
            <div className="portal-action">
              <span>Enter Home</span> <i className="fa fa-chevron-right"></i>
            </div>
          </Link>

          <Link href="/about-us" className="portal-card">
            <div>
              <div className="portal-card-header">
                <div className="portal-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <h2 className="portal-title">About Us</h2>
              </div>
              <p className="portal-desc">Spun off from Avion Construction Group to focus exclusively on steel. Discover our story, values, and commitment to project success.</p>
            </div>
            <div className="portal-action">
              <span>Meet the Team</span> <i className="fa fa-chevron-right"></i>
            </div>
          </Link>

          <Link href="/services" className="portal-card">
            <div>
              <div className="portal-card-header">
                <div className="portal-icon">
                  <svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.6z"/></svg>
                </div>
                <h2 className="portal-title">Our Services</h2>
              </div>
              <p className="portal-desc">From design-assist and steel coordination to fabrication, erection, miscellaneous metals, and pre-engineered metal buildings.</p>
            </div>
            <div className="portal-action">
              <span>Our Capabilities</span> <i className="fa fa-chevron-right"></i>
            </div>
          </Link>

          <Link href="/projects" className="portal-card">
            <div>
              <div className="portal-card-header">
                <div className="portal-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                </div>
                <h2 className="portal-title">Our Projects</h2>
              </div>
              <p className="portal-desc">Browse our portfolio of completed projects spanning commercial, industrial, institutional, and retrofit sectors across Ontario.</p>
            </div>
            <div className="portal-action">
              <span>View Projects</span> <i className="fa fa-chevron-right"></i>
            </div>
          </Link>

          <Link href="/gallery" className="portal-card">
            <div>
              <div className="portal-card-header">
                <div className="portal-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                </div>
                <h2 className="portal-title">Gallery Showcase</h2>
              </div>
              <p className="portal-desc">Take an immersive look at our fabrication shop, structural steel erection, on-site construction, and finished installations.</p>
            </div>
            <div className="portal-action">
              <span>Open Gallery</span> <i className="fa fa-chevron-right"></i>
            </div>
          </Link>

          <Link href="/contact" className="portal-card">
            <div>
              <div className="portal-card-header">
                <div className="portal-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <h2 className="portal-title">Contact Us</h2>
              </div>
              <p className="portal-desc">Need a steel partner for an upcoming project? Reach out for estimates, coordination, or to discuss your steel scope requirements.</p>
            </div>
            <div className="portal-action">
              <span>Get in Touch</span> <i className="fa fa-chevron-right"></i>
            </div>
          </Link>

        </div>

        <Link href="/home" className="enter-btn">
          Enter Full Website <i className="fa fa-arrow-right"></i>
        </Link>
      </main>

      <footer>
        &copy; 2026 Avion Steel Group Inc. All rights reserved. | Ontario, Canada
      </footer>
    </>
  )
}
