import Heading from './components/Heading';
import Home from './components/Home';
import CreateBlog from "./components/CreateBlog";
import BlogPage from "./components/BlogPage";
import EditBlog from "./components/EditBlog"
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './index.css';
import './App.css';
import NotFound from './components/NotFound';

const App = () => {
 
  
    return (
      <Router>
        <div className="container">
          <Heading  />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/blog-page/:id">
              <BlogPage  />
            </Route>
            <Route path="/edit-blog/:id">
              <EditBlog  />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        
      </Router>
    );
}


export default App;
