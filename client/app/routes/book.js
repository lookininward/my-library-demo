import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(book) {
    return this.get('store').peekRecord('book', book.book_id);
  }
});