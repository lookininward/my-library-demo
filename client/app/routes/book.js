import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(book) {
    return this.get('store').peekRecord('book', book.book_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.controller.set('confirmingDelete', false);
    this.controller.set('isEditing', false);
    this.controller.set('form.title', model.get('title'));
    this.controller.set('form.author', model.get('author'));
    this.controller.set('form.description', model.get('description'));
  },

  actions: {

    delete(book) {
      book.deleteRecord();
      book.save().then(() => {
        this.transitionTo('books');
      });
    },

    update(book) {
      const form = this.controller.get('form');

      book.set('title', form.title);
      book.set('author', form.author);
      book.set('description', form.description);

      book.save().then(() => {
        this.controller.set('isEditing', false);
      });
    }
  }
});