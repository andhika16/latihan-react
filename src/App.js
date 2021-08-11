import React, {useState, useEffect} from 'react';
import Heading from './components/Heading';
import Home from './components/Home';
import CreateBlog from "./components/CreateBlog";
import BlogPage from "./components/BlogPage";
import fetch from "node-fetch";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import './index.css';
import './App.css';


const App = () => {


    const [blogs, setBLog] = useState([]) 
    
    const addBlog = (blog) => {
      const id = Math.floor(Math.random() * 1000) + 1;
      const newBlog = {id, ...blog}
      setBLog([...blogs,newBlog ])
    }
    
    useEffect(() => {
      fetch('http://localhost:8000/data/')
          .then(res => {
            return res.json()
          })
          .catch(err => console.log('errror', err))
          .then(data => setBLog(data))
    },[])
  

 
  
    return (
      <Router>
        <div className="container">
          <Heading />
          <Switch>
            <Route exact path="/">
              <Home blogs={blogs} 
              />
            </Route>
            <Route path="/create-blog">
              <CreateBlog onAdd={addBlog} />
            </Route>
            <Route path="/blog-page/:id" component={BlogPage} >
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
}


export default App;
