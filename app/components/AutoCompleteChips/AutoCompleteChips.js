import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import Chip from 'material-ui/Chip'

import style from './AutoCompleteChips.scss'

class AutoCompleteChips extends Component {
  constructor (props) {
    super(props)
    
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    
    this.state = {
      items: ['madzia', 'tomuś'],
      st: ''
    }
  }
  
  addItem (word) {
    this.setState({
      items: [...this.state.items, word],
      st: ''
    })
  }
  
  removeItem (i) {
    this.setState({
      items: [...this.state.items.slice(0, i), ...this.state.items.slice(i + 1)]
    })
  }
  
  render () {
    const { items } = this.state
    return (
      <div className={style.container}>
        <div className={style.label}>Add new items:</div>
        <div className={style.chips}>
          <div className={style.chips}>
            {
              items.map((item, i) => <Chip key={i} className={style.chip} onRequestDelete={() => this.removeItem(i)}>{item}</Chip>)
            }
          </div>
          <div className={style.autocomplete}>
            <AutoComplete
              name="autocomplete"
              dataSource={['aa', 'aaaaaa', 'a']}
              onNewRequest={this.addItem}
              onUpdateInput={(v) => {this.setState({st: v})}}
              searchText={this.state.st}
              hintText="enter text"
            />
          </div>
        </div>
      </div>
    )
  }

}

export default AutoCompleteChips
