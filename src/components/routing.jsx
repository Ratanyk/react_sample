import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

//Component Imports
import Topbar from './topbar/topbar.component.jsx'
import Login from './login/login.component.jsx'
import Chat from './chat/chatbot.component.jsx'

// import ListOfBots from './list-of-bots/list-of-bots.component.jsx'
// import BotDetails from './bot-details/bot-details.component.jsx'

// import BuilderModels from './dialogs/builderModels.component.jsx'
// import Builder from './dialogs/builder-2/builder.component.jsx'

// import QnAModels from './qna-models/qnaModels.component.jsx'
// import QnAModelTemplate from './qna-models/model-template/QnAModelTemplate.component.jsx'

// import BotSettings from './bot-details/bot-settings/bot-settings.component.jsx'

import {resolveAppName} from '../services/configs'

const appName = resolveAppName()

class Routing extends Component {
  render() {
    return (
      <Router basename={"webapp/" + appName + "/#"}>
        <Topbar/>
        <div>
        <Switch>
        <Route exact path="/" component={Chat} />
        <Redirect from="*" to="/" />
            {/* <Route exact path="/" component={Login} />
            <Route exact path="/bots" component={ListOfBots} />
            <Route exact path="/bots/:botID" component={BotDetails} />
            <Route exact path="/bots/:botID/settings/" component={BotSettings} />
            <Route exact path="/bots/:botID/dialogs/" component={BuilderModels} />
            <Route exact path="/bots/:botID/dialogs/:dialogID" component={Builder} />
            <Route exact path="/bots/:botID/faqs/" component={QnAModels} />
            <Route exact path="/bots/:botID/faqs/:modelID" component={QnAModelTemplate} />
             */}
          </Switch>
        </div>
      </Router>
    )
  }
}


export default Routing;
