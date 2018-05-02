import React from 'react';
import { Switch } from 'react-router';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Blog from '../containers/Blog';
import BlogSingle from '../containers/Blog/Single';
import About from '../containers/About';
import Contact from '../containers/Contact';
import NotFound from '../containers/NotFound';

const routes = (
  <div>
    <Switch>
      <Layout exact path="/" component={Home} />
      <Layout exact path="/blog" component={Blog} />
      <Layout exact path="/blog/:slug" component={BlogSingle} />
      <Layout exact path="/about" component={About} />
      <Layout exact path="/contact" component={Contact} />
      <Layout path="*" component={NotFound} />
    </Switch>
  </div>
);

export default routes;
