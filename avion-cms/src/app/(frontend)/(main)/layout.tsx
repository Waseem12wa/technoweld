/* eslint-disable */
import React from 'react'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export const metadata = {
  title: 'Avion Steel Group Inc | Structural Steel & Misc Metals',
  description: 'Avion Steel Group Inc is a premiere structural steel fabrication service provider in Ontario offering a full range of structural & miscellaneous steel supply, fabrication and welding.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%7CSource+Sans+Pro:400,600,700" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/custom.css" />
      </head>
      <body className="wp-singular page-template page-template-template-fullwidth page-template-template-fullwidth-php wp-embed-responsive wp-theme-induscity wp-child-theme-induscity-child full-content hide-topbar-mobile header-v3 wpb-js-composer js-comp-ver-8.5 vc_responsive">
        <div id="page" className="hfeed site">
          <Header />
          <main id="content" className="site-content">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Scripts needed for the theme template functionality */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="/js/custom.js"></script>
      </body>
    </html>
  )
}
