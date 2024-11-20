import React from 'react';
import ReactDOM from 'react-dom';
import ZapierChatbot from './components/ZapierChatbot';

ReactDOM.render(
  <React.StrictMode>
    <ZapierChatbot />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to expose this as a web component
class HappeoZapierWidget extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<ZapierChatbot />, this);
  }
}

customElements.define('happeo-zapier-widget', HappeoZapierWidget);
