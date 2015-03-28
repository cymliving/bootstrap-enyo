enyo.kind({
	name: "bootstrap.NotificationBar",
	// ...........................
	// PUBLIC PROPERTIES
  classes: "notification-bar alert",
  published: {
    type: "info",  // info || warning || danger || success
    dismissable: false,
    displayTime: 5,
    position: "top",
    content: ""
  },
	handlers: {
		onDismissAlert: "dismissAlert"
	},
  components: [
    {name: "alertMessage", tag: 'span'}
  ],
  bindings: [
    {from: ".content", to: ".$.alertMessage.content"},
    {from: ".allowHtml", to: ".$.alertMessage.allowHtml"}
  ],
	// ...........................
	// PROTECTED METHODS
	create: function() {
    this.inherited(arguments);
    this.setupClasses();
		if(this.dismissable){
			this.createComponent({kind:"bootstrap.AlertCloseIcon", addBefore: null});
		} else {
      var that = this;
      setTimeout(function() { that.dismissAlert(); } , that.displayTime * 1000);
    }
	},
	setupClasses: function(){
		var classes = [this.getAttribute('class')];
		classes.push("alert-" + this.type);
    classes.push(this.position);
		if(this.dismissable){
			classes.push('alert-dismissable');
		}
		this.setAttribute('class', classes.join(' '));
	},
	dismissAlert: function(){
		this.destroy();
	}
});
