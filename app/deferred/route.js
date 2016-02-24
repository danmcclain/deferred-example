import Ember from 'ember';
import Posts from '../models/posts';

const { Route } = Ember;

export default Route.extend({
  model({ id }) {
    return Posts.findBy('id', Number(id));
  },
});
