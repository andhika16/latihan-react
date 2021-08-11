import React, {useState} from 'react';
import Heading from './components/Heading';
import Home from './components/Home';
import CreateBlog from "./components/CreateBlog";
import BlogPage from "./components/BlogPage";

import { BrowserRouter as Router, Route, Switch ,Redirect } from 'react-router-dom';

import './index.css';
import './App.css';


const App = () => {

   const data = [
        { id: 1, title: 'blog 1', blog: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, explicabo.' },
        { id: 2, title: 'blog 2', blog: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, explicabo.' },
        { id: 3, title: 'blog 3', blog: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, explicabo.' },
        { id: 4, title: 'blog 4', blog: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, explicabo.' },
        { id: 5, title: 'blog 5', blog: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, explicabo.' },
    ]

    const [blogs, setBLog] = useState(data) 

    const addBlog = (blog) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newBlog = {id, ...blog}
        setBLog([...blogs,newBlog ])

      
    }


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
