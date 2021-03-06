import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  completedAt: DS.attr('date'),
  project: DS.belongsTo('project', { async: true })
});
