enyo.kind({
  name: "bootstrap.ProgressBar",
  // ...........................
  // PUBLIC PROPERTIES
  classes: "progress",
  published: {
    percent: false,
    striped: false,
    text: false,
    type: "default", // progress-bar-default || progress-bar-primary || progress-bar-success || progress-bar-info || progress-bar-warning || progress-bar-danger
  },
  components: [
    {tag: 'div', name: "progressBar", classes: "progress-bar", components: [
      {tag: 'span', name: "progressBarText", classes: "sr-only"}
    ]}
  ],
  // ...........................
  // PROTECTED METHODS
  create: function() {
    this.inherited(arguments);
    this.setupBar();
  },
  setupBar: function(){
    this.typeChanged();
    this.stripedChanged();
    this.percentChanged();
    this.textChanged();
  },
  typeChanged: function(oldType) {
    // remove old type class
    if(oldType && oldType != "default"){
      this.$.progressBar.removeClass("progress-bar-" + oldType);
    }

    // add the new
    if(this.type && this.type != "default"){
      this.$.progressBar.addClass("progress-bar-" + this.type);
    }
  },
  stripedChanged: function(){
    this.$.progressBar.addRemoveClass("progress-bar-striped", this.striped);
  },
  percentChanged: function(oldPercent) {
    if(this.percent){
      this.$.progressBar.applyStyle("width", this.percent + "%");
      this.$.progressBarText.setContent(this.percent + "%");
    } else if(oldPercent) {
      this.$.progressBar.applyStyle("width", null);
      this.$.progressBarText.setContent("0%");
    }
  },
  textChanged: function(oldText) {
    this.$.progressBarText.addRemoveClass("sr-only", !this.text);
  }
});
