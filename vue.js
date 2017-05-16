var vueApp = new Vue({
  el: '#vueApp',
  data: {
   tweet: '',
   maxTweetLength: 140
  },
  computed: {
    tweetIsOutOfRange: function() {
      return this.charactersRemaining == this.maxTweetLength
             || this.charactersRemaining < 0;
    },
    charactersRemaining: function() {
      return this.maxTweetLength - this.tweet.length;
    },
    underTwentyMark: function() {
      return this.charactersRemaining <= 20 && this.charactersRemaining > 10;
    },
    underTenMark: function() {
      return this.charactersRemaining <= 10;
    }
  }
});
