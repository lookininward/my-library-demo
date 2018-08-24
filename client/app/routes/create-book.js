import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  setupController(controller, model) {
    this._super(controller, model);
    this.controller.set('form.title', '');
    this.controller.set('form.author', '');
    this.controller.set('form.description', '');
  },

  actions: {

    create() {
      const form = this.controller.get('form');
      const store = this.get('store');

      const newBook = store.createRecord('book', {
        title: form.title,
        author: form.author,
        description: form.description
      });

      newBook.save()
        .then(() => {
          this.transitionTo('books');
        });
    },

    cancel() {
      this.transitionTo('books');
    }
  }
});
