import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Posts from "./Posts/Posts";
import NotFound from "./NotFound/NotFound";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import Register from "./Register/Register";
import PostPage from "./PostPage/PostPage";
import AddPost from "./AddPost/AddPost";
import EditPost from "./EditPost/EditPost";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Posts} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/post/:id' component={PostPage} />
            <Route exact path='/add' component={AddPost} />
            <Route exact path='/edit/:id' component={EditPost} />
            <Route exact path='/logout' component={Logout} />
            <Route path='/' component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
