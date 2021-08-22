import Heading from './components/Heading';
import Home from './components/Home';
import CreateBlog from "./components/CreateBlog";
import BlogPage from "./components/BlogPage";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './index.css';
import './App.css';


const App = () => {
 
  
    return (
      <Router>
        <div className="container">
          <Heading />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/blog-page/:id" >
              <BlogPage />
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
}


export default App;
