require('semantic-ui/dist/semantic.min.css')

import React, { Component } from 'react'
import { GithubCommits } from './githubcommits'
import { Icon, Label, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routes } from '../appConfig/routes'

export class HomeIsTheSix extends Component {
  render() {
    return (
      <div>
        <h3></h3>
        <Message color='blue'>
          <Message.Content>
            <Label color='blue'>
              <Icon size='huge' name='chain'/>
                <Link style={{fontSize: '20px'}} to={routes.MAP}>Map </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link style={{fontSize: '20px'}} to={routes.PHO}>Pho </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </Label>
          </Message.Content>
        </Message>
        <br />
        <Message color='green' header='TODOs'
                 list={[
                   'Make map markers ot interactive',
                   'If Geolocation fails, allow user to drop home marker',
                   'Server: may need to renew letsencrypt certificate for google maps api',
                   'Wire up mongodb to allow user image upload, and admin features',
                   'Sortable columns',
                   'Filterable columns',
                   'Sort View',
                   'From inspections, nearby inspections' ]} />
        <br />
        <Message error header='Issues'
                 list={[
                   'nav css. icon colors for image icons',
                   'Geolocation on chrome for android not consistently working',
                   'Server: may need to renew letsencrypt certificate for google maps api' ]} />
        <br />
        <h3>You can check out the last 25 commits in the table below</h3>
        <GithubCommits />
      </div>
    )
  }
}
