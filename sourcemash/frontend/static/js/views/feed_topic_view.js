Sourcemash.Views.FeedTopicView = Backbone.View.extend({
  template: JST['feed-topic'],

  initialize: function(options) {
    this.topic = options.topic;

    this.feedCardViews = []

    this.render();
  },

  render: function() {
    this.close();

    // Render parent view
    this.$el.html(this.template({ models: this.collection, topic: this.topic }));

    // Render feed cards
    var feedCards = [];
    this.collection.forEach(function(feed) {
        var feedCardView = new Sourcemash.Views.FeedCardView({el: "#feed-card-" + feed.get('id'),
                                                              model: feed});
        feedCards.push(feedCardView);
    });

    this.feedCardViews = feedCards;
    return this;
  },

  close: function() {
    _.each(this.feedCardViews, function(feedCardView) {
        feedCardView.close();
        feedCardView.remove();
        feedCardView.unbind();
    });

  }

});
