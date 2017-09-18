$(document).ready(function() {
  var app = new hellojs.App();
  app.init({
    bootstrap: {
      fonts: ['scoutIcons'],
      modelsUrl: 'res/hellojs-all.json',
      textsUrl: 'res/texts.json'
    }
  });
});
