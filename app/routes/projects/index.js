import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    try {
      let projects = await this.store.findAll('project');
    } catch (e) {
      console.log(e);
    }
    debugger;
    return projects;
  },
});
