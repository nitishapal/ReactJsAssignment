import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Favourite from './Favourite';
import Favouritelist from './Favouritelist';

class Tabs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <div
          >
            <div>
              <ul className="nav">
                <li>
                  <Link
                    to={"/"}
                    className="nav-link"
                  >
                    <p>Favorite</p>
                  </Link>
                </li>
                <li
                >
                  <Link
                    to={"/favouritedetail"}
                    className="nav-link"
                  >
                    <p> Favorite list </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>

            <div className="content">
              <div className="container-fluid">
                <Switch>
                  <Route
                    exact
                    path={"/"}
                    render={(props) => (
                      <Favourite />
                    )}
                  />
                  <Route
                    exact
                    path={"/favouritedetail"}
                    render={(props) => (
                      <Favouritelist />
                    )}
                  />
                </Switch>
              </div>
            </div>

          </div>
        </div>
      </Router>
    )
  }
}

export default Tabs
