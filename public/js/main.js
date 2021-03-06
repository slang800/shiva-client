(function() {
  var SHIVA_URL,
    __slice = [].slice;

  SHIVA_URL = 'http://localhost:9002';

  require.config({
    paths: {
      underscore: '../components/underscore/underscore',
      backbone: '../components/backbone/backbone',
      jquery: '../components/jquery/jquery.min',
      localstorage: "../components/backbone.localStorage/backbone.localStorage",
      deepmodel: "../components/backbone-deep-model/distribution/deep-model.min",
      moment: "../components/moment/min/moment.min"
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      deepmodel: {
        deps: ['underscore']
      },
      tipsy: ['jquery'],
      jgrowl: ['jquery']
    }
  });

  require(['jquery', 'wavesurfer', 'tipsy', 'jgrowl'], function($, WaveSurfer) {
    /*
    	if ("geolocation" in navigator)
    		navigator.geolocation.getCurrentPosition((position) ->
    			Shiva.geolocation = position.coords
    		)
    */

    window.p = function(text) {
      return console.log(text);
    };
    return window.notify = function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = $("#jGrowl-container")).jGrowl.apply(_ref, args);
    };
  });

  require(['wavesurfer', 'webaudio', 'collection', 'autocomplete'], function(WaveSurfer, WebAudio, Tracks) {
    var search;
    window.wavesurfer = new WaveSurfer({
      backend: new WebAudio()
    });
    document.addEventListener("click", function(e) {
      var action;
      action = e.target.dataset && e.target.dataset.action;
      if (action && action in eventHandlers) {
        return eventHandlers[action](e);
      }
    });
    library.change_track(1269);
    return search = new AutoComplete('search_bar', ['Apple', 'Banana', 'Orange']);
  });

}).call(this);
