import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books');
  this.route('book', { path: 'books/:book_id' });
  this.route('create-book');
});

export default Router;
