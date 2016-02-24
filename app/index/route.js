import Ember from 'ember';
import Posts from '../models/posts';

const { Route } = Ember;

export default Route.extend({
  model() {
    return Posts;
  }
});
