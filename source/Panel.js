enyo.kind({
  name: "bootstrap.Panel",
  classes: "panel",
  published: {
    type: "default", //default || primary || success || info || warning || danger
    heading: null,
    body: []
  },
  tools: function() {
    return [
      {classes: "panel-heading", content: this.heading},
      {classes: "panel-body", components: this.body}
    ];
  },
  create: enyo.inherit(function(sup) {
    return function () {
      sup.apply(this, arguments);
      this.createComponents(this.tools(), {owner: this});
      this.setupClasses();
    };
  }),
	setupClasses: function(){
		var classes = [this.getAttribute('class')];
		classes.push("panel-" + this.type);
		this.setAttribute('class', classes.join(' '));
	}  
});
