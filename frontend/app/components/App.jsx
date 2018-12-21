import { createStore } from "redux";
import React, { Component } from "react";
import reducer from "./../reducers";
import { Provider } from "react-redux";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import ChangePassword from "./ChangePassword";
import Recompose from "./exampleContainer";

const store = createStore(reducer);

store.dispatch({
  type: "SET_STATE",
  state: {
    isLoader: false,
    stations: [],
    places: [],
    dangers: [],
    stationsData: {},
    markerType: "My Place",
    viewType: "Current",
    actionType: "Add",
    scaleWind: 100,
    notificationSettings: [],
    savePointSettings: {},
    notifications: [],
    info: {
      place: null,
      type: null
    }
  }
});

store.subscribe(() => {
  console.log("store", store.getState().toJS());
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/ChangePassword" component={ChangePassword} />
              <Route path="/recompose" component={Recompose} />
              <Route children={() => <h2>Not found</h2>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
