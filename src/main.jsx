import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

function mount(el) {
  if (!el) return
  if (el.__reactRoot) return
  const root = createRoot(el)
  el.__reactRoot = root

  const settings = (window.drupalSettings && window.drupalSettings.myReactApp) || {}

  root.render(
    <React.StrictMode>
      <HashRouter>
        <App {...settings} />
      </HashRouter>
    </React.StrictMode>
  )
}

// para soportar Drupal behaviors y fallback directo
(function attach() {
  const selector = '#react-app, #root'
  if (window.Drupal && window.once) {
    window.Drupal.behaviors.myReactApp = {
      attach(context) {
        window.once('myReactApp', selector, context).forEach(mount)
      },
    }
  } else {
    const el = document.querySelector(selector)
    mount(el)
  }
})();
