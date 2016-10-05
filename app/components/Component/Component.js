import React from 'react'
import style from './Component.scss'
import AutoComplete from 'material-ui/AutoComplete'

export default function MyComponent () {
    return (
        <div>
            <div className={style.myClass}>
                aaa
            </div>
            <AutoComplete dataSource={['a','b','c']}/>
        </div>

    )
}
