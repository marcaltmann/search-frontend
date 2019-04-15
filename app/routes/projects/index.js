import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let projects = this.store.findAll('project');
    return projects;
  },
});
