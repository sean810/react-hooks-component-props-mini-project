import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import { blogData } from '../data/blog';

function App() {
  return (
    <div className="App">
      <Header name="Sean's Personal Blog" />
      <About 
        image="https://via.placeholder.com/215" 
        about="Welcome to my personal blog where I share my projects, interests, and insights into the tech world." 
      />
      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;
