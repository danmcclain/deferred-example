import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('deferred', { path: 'deferred/:id' });
  this.route('normal', { path: 'normal/:id' });
});

export default Router;
