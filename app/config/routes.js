var React = require('react');

var Main = require('../components/Main');
var Saved = require('../components/Saved');
var Search = require('../components/Search');

var Results = require('../components/Search/Results');
var Query = require('../components/Search/Query');


var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;


module.exports=(
    <Route path="/" component={Main} >
        <Route path='/saved' component={Saved} />
        <IndexRoute component={Search} />
    </Route>
);