import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyComponent from '../components/Component/Component'
import Mist from '../components/Mist/Mist'
import AutoCompleteChips from '../components/AutoCompleteChips/AutoCompleteChips'

import style from './App.scss'

export default class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div id="content" className={style.container}>
          <AutoCompleteChips />
        </div>
      </MuiThemeProvider>
    )
  }
}
