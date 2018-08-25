import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  form: computed(function() {
    const model = this.get('model');
    return {
      title: model.get('title'),
      author: model.get('author'),
      description: model.get('description'),
    }
  })

});
