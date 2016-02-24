import Ember from 'ember';
import Posts from '../models/posts';

const { Route } = Ember;

export default Route.extend({
  model({ id }) {
    return Posts.findBy('id', Number(id));
  },
  afterModel(model) {
    return model.get('body').then((body) => {
      model.set('renderBody', body);
      return model;
    });
  }
});
