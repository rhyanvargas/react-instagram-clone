import React from "react";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import feed from './pages/feed'
import explore from './pages/explore'
import login from './pages/login'
import signup from './pages/signup'
import post from './pages/post'
import editProfile from './pages/edit-profile'
import profile from './pages/profile'
import notFound from './pages/not-found'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={feed}/>
        <Route path='/explore' component={explore}/>
        <Route exact path='/:username' component={profile}/>
        <Route exact path='/p/:postId' component={post}/>
        <Route path='/accounts/emailsignup' component={signup}/>
        <Route path='/accounts/login' component={login}/>
        <Route path='/accounts/edit' component={editProfile}/>
        <Route path='*' component={notFound}/>
      </Switch>
    </Router>
  )
}

export default App;
