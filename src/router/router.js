import React, {Component} from 'react';  
import {Switch, Route} from 'react-router-dom';  
import Women from './../component/Women/Women.jsx';
import Kids from './../component/Kids/Kids.jsx';
import App from './../App.js'

class Router extends Component {  
    render() {  
        return (  
            <Switch>  
                <Route exact path="/" component={App}/>  
                <Route path="/women" component={Women}/>
                <Route path="/kids" component={Kids}/>    
            </Switch>  
        );  
    }  
}  

export default Router;