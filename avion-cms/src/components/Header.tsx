/* eslint-disable */
import React from 'react'

export const Header: React.FC = () => {
  return (
    <>
      <div id="topbar" className="topbar hidden-md hidden-sm hidden-xs">
        <div className="container">
          <div className="topbar-left topbar-widgets text-left clearfix">
            <div id="custom_html-3" className="widget_text widget widget_custom_html">
              <div className="textwidget custom-html-widget">
                <div>Structural Steel Fabrication & Erection in Ontario</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="masthead" className="site-header clearfix">
        <div className="header-main">
          <div className="container">
            <div className="row menu-row">
              <div className="site-logo col-md-9 col-sm-9 col-xs-9">
                <a href="/" className="logo">
                  <img src="https://avionsteel.ca/api/media/file/Avion-Steel-Logo.webp" alt="Avion Steel Group Inc" className="logo" />
                </a>
                <p className="site-title"><a href="/" rel="home">Avion Steel Group Inc</a></p>
                <h2 className="site-description">Structural Steel &amp; Misc Metals</h2>
              </div>
              <div className="site-menu hidden-md hidden-sm hidden-xs">
                <nav id="site-navigation" className="main-nav primary-nav nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li className="menu-item"><a href="/">Home</a></li>
                    <li className="menu-item"><a href="/about-us">About Us</a></li>
                    <li className="menu-item"><a href="/services">Services</a></li>
                    <li className="menu-item"><a href="/projects">Projects</a></li>
                    <li className="menu-item"><a href="/gallery">Gallery</a></li>
                    <li className="menu-item"><a href="/contact">Contact</a></li>
                    <li className="extra-menu-item menu-item-search">
                      <a href="#" className="toggle-search"><i className="fa fa-search" aria-hidden="true"></i></a>
                      <form method="get" className="search-form" action="/">
                        <input type="search" className="search-field" placeholder="Search..." name="s" />
                        <input type="submit" className="search-submit" value="Search" />
                      </form>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-toggle col-md-3 col-sm-3 col-xs-3">
                <span id="mf-navbar-toggle" className="navbar-icon">
                  <span className="navbars-line"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
