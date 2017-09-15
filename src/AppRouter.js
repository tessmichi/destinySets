import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Drops from './views/Drops';
import DropsLegacy from './views/DropsLegacy';
import AllItems from './views/AllItems';
import Kiosks from './views/Kiosks';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Drops} variation="raid" />
        {/*<Route path="/raid" component={Drops} variation="raid" /> */}
        <Route path="/items" component={AllItems} />
        <Route path="/kiosks" component={Kiosks} />

        <Route path="/destiny1" component={DropsLegacy} variation="strike" />
        <Route path="/destiny1/raid" component={DropsLegacy} variation="raid" />
        <Route path="/destiny1/items" component={AllItems} />
        <Route path="/destiny1/kiosks" component={Kiosks} />
      </Router>
    );
  }
}
