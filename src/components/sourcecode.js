require('../styles/pagecontent.css')
require('onsenui/css/onsenui.css')
require('onsenui/css/onsen-css-components.css')
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { List, ListHeader, ListItem } from 'react-onsenui'

export default class SourceCode extends Component {
  render() {
    const ds6url = 'https://github.com/openciti/dinesafe6/blob/master/README.md';
    const ocavatar = 'https://avatars2.githubusercontent.com/u/4270738?v=3&s=460';
    const ocurl = 'https://github.com/openciti?tab=repositories';
    return (
      <List className='listStyle'>
        <ListHeader><h3>Github links</h3></ListHeader>
        <ListItem>
          <a href={ocurl} target='_blank'>
            <div className='left'>
              <img className='img-circle matchHuge' src={ocavatar} />
            </div>
            <div className='center'>
              Developer - @openciti
            </div>
          </a>
        </ListItem>
        <ListItem>
          <a href={ds6url} target='_blank'>
            <div className='left'>
              <Icon size='huge' name='github' />
            </div>
            <div className='center'>
              dinesafe6 repository
            </div>
          </a>
        </ListItem>
      </List>
    )
  }
}
