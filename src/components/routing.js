import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

//Component Imports
import Topbar from './topbar.component'
// import Login from './login/login.component'
import Chat from './chat/chatbot.component'

// import BuilderModels from './dialog-builder/builderModels.component'
// import DialogBuilder from './dialog-builder/builder-template/dialogbuilder.component'

// import LuisModels from './luis-models/luisModels.component'
// import ModelView from './luis-models/modelView/modelView.component'

// import QnAModels from './qna-models/qnaModels.component'
// import QnAModelTemplate from './qna-models/model-template/QnAModelTemplate.component'

class Routing extends Component {
  render() {
    return (
      <Router>
        <Topbar/>
        <div>
        <Route exact path="/" component={Chat} />
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route exact path="/" component={DialogBuilder} /> */}
          {/* <Route exact path="/dialog-builder" component={BuilderModels} />
          <Route exact path="/dialog-builder/:dialogID" component={DialogBuilder} />
          <Route exact path="/luis-models" component={LuisModels} />
          <Route exact path="/luis-models/:modelID" component={ModelView} />
          <Route exact path="/qna-models" component={QnAModels} />
          <Route exact path="/qna-models/:modelID" component={QnAModelTemplate} /> */}
        </div>
      </Router>
    )
  }
}


export default Routing;
