enyo.kind({
	name: "bootstrap.Form",
	tag: "form",
	attributes: {
		role: "form",
	},
	published: {
		inline: false,
		horizontal: false,
	},
	initComponents: function() {
		this.inherited(arguments);
		if (this.inline) {
			this.addClass("form-inline");
		} else if (this.horizontal) {
			this.addClass("form-horizontal");
		}
	}
});

enyo.kind({
	name: "bootstrap.FormGroup",
	classes: "form-group"
});

enyo.kind({
	name: "bootstrap.FormControlLabel",
	tag: "label",
	published: {
		screenReaderOnly: false,
	},
	initComponents: function() {
		this.inherited(arguments);
		if (this.screenReaderOnly) {
			this.addClass("sr-only");
		}
	}
});

enyo.kind({
	name: "bootstrap.TextInput",
  kind: "enyo.Input",
	classes: "form-control"
});

enyo.kind({
	name: "bootstrap.SelectInput",
  kind: "enyo.Select",
	classes: "form-control",
  published: {
    active: ''
  },
  handlers: {
    onchange: 'updateActive'
  },
  bindings: [
    {from: '.active', to: '.selected', transform: function(val) {
      var selected = -1,
          value = val+'';

        enyo.forEach(this.children, function(option, idx) {
          if ((option.value+'') === value) {
            selected = idx;
          }
        });
      console.log(selected);
      return selected;
    }}
  ],
  updateActive: function() {
    console.log('update');
    this.set('active', this.getValue());
  }
});

enyo.kind({
	name: "bootstrap.TextArea",
	tag: "textarea",
	classes: "form-control",
	attributes: {
		rows: "3",
	},
	published: {
		rows: "3",
	},
	create: function(){
		this.inherited(arguments);
		if (this.rows !== "3") {
			this.attributes.rows = this.rows;
		}
	}
})

enyo.kind({
	name: "bootstrap.Checkbox",
	classes: "checkbox",
	tag: "label",
	components: [
		{name: "checkbox", tag: "input", type: "checkbox"},
		{name: "label", tag: "span" }
	],
	create: function(){
		this.inherited(arguments);
	},
})
