import ReactDOM from 'react-dom'
import React from 'react'
import App from 'components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
