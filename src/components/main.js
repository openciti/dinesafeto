require('semantic-ui/dist/semantic.min.css')
require('onsenui/css/onsenui.css')
require('onsenui/css/onsen-css-components.css')
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Protocol } from '../classes/protocol'
import { List, Page, Splitter, SplitterContent, SplitterSide } from 'react-onsenui'
import { createStore } from 'redux'
import routes from '../appConfig/routes'
import { reducer } from '../classes/reducer'
import { cap } from '../classes/strings'
import initialState from '../appConfig/initstate'
import { RenderToolBar, RenderHamburger } from './renderMenus'
import rts from './routeComponents'

export const store = createStore(reducer, initialState)

class App2 extends Component {

  state = { isOpen: false }

  componentDidMount = () => {
    Protocol.forceProtocol()
    store.subscribe( () => this.forceUpdate() )
    window.addEventListener('resize', this.closeFab)

    // help distinguish browser tabs when in development
    if (window.location.href.indexOf('localhost') > -1) {
      document.title = 'local'
    }
  }

  hideMenu = () => {
    this.setState( { isOpen: false } )
  }
  closeFab = () => {
  }
  showMenu = () => {
    this.setState( { isOpen: true } )
  }

  render() {
    const toolbar =  () => {

      // We want the title to be 'Dinesafe 6 | VIEW' or just 'Dinesafe 6' for the home view
      const v = cap(window.location.pathname.replace(/\//, '')).trim()
      const view = v === '' ? '' : ` | ${v}`

      return <RenderToolBar ShowMenuClick={this.showMenu} view={view} />
    }

    const splitterStyle = 'boxShadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'

    return (
      <Router>
        <Splitter>
          <SplitterSide
            style={ {splitterStyle} }
            side='left'
            width={200}
            collapse={true}
            isSwipeable={true}
            isOpen={this.state.isOpen}
            onClose={this.hideMenu}
            onOpen={this.showMenu} >
            <Page>
              <List>
                <RenderHamburger
                 HideMenuClick={this.hideMenu} />
              </List>
            </Page>
          </SplitterSide>
          <SplitterContent>
            <Page renderToolbar={toolbar}>
              <section style={{textAlign: 'center', margin: '16px'}}>
                <Route exact path={routes.HOME} component={rts.Home} />
                <Route path={routes.MAP} component={rts.VenueMap} />
                <Route path={routes.INFO} component={rts.About} />
                <Route path={routes.HELP} component={rts.Help} />
                <Route path={routes.PHO} component={rts.Pho} />
                <Route path={routes.OPENDATA} component={rts.OpenData} />
                <Route path={routes.LICENCE} component={rts.Licence} />
                <Route path={routes.SOURCE} component={rts.Source} />
                <Route path={routes.TWITTERBOT} component={rts.TwitterBot} />
                <Route path={routes.TWITTERHELP} component={rts.TwitterHelp} />
                <Route path={routes.SEARCH} component={rts.VenueSearch} />
                <Route path={routes.LIST} component={rts.VenueList} />
                <Route path={routes.INSPECTIONS} component={rts.DinesafeInspections} />
              </section>

            </Page>
          </SplitterContent>
        </Splitter>
      </Router>
    )
  }
}
export default App2
