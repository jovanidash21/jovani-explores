import React from 'react';
import { Switch } from 'react-router';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Work from '../containers/Work';
import WorkSingle from '../containers/Work/Single';
import Blog from '../containers/Blog';
import BlogSingle from '../containers/Blog/Single';
import About from '../containers/About';
import Contact from '../containers/Contact';
import NotFound from '../containers/NotFound';

const routes = (
  <div>
    <Switch>
      <Layout exact path="/jovani-codes/" component={Home} />
      <Layout exact path="/jovani-codes/work" component={Work} />
      <Layout exact path="/jovani-codes/work/:slug" component={WorkSingle} />
      <Layout exact path="/jovani-codes/blog" component={Blog} />
      <Layout exact path="/jovani-codes/blog/:slug" component={BlogSingle} />
      <Layout exact path="/jovani-codes/about" component={About} />
      <Layout exact path="/jovani-codes/contact" component={Contact} />
      <Layout path="*" component={NotFound} />
    </Switch>
  </div>
);

export default routes;
