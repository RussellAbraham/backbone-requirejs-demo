define(['backbone'], function (Backbone) {

  var Container = Backbone.View.extend({
    child: null,
    render: function (view) {
      this.child = view;
      this.$el.html(this.child.$el);
      return this;
    }
  });

  return Container;

});