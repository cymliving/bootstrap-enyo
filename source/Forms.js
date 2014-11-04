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
			this.addClass("form-horizontal")
		}
	}
});

enyo.kind({
	name: "bootstrap.FormGroup",
	classes: "form-group",
})

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
})

enyo.kind({
	name: "bootstrap.FormControl",
	classes: "form-control",
	tag: 'input',
	attributes: {
		type: "text",
    placeholder: "",
    value: "",
	},
	published: {
		type: "text",
	},
  create: function() {
		this.inherited(arguments);
    this.setupPlaceholder();
    this.valueChanged();
  },
  setupPlaceholder: function() {
		if (this.placeholder) {
      this.attributes.placeholder = this.placeholder;
		}
  },
  valueChanged: function() {
		var node = this.hasNode(),
			attrs = this.attributes;
		if (node) {
			if (node.value !== this.value) {
				node.value = this.value;
			}
			// we manually update the cached value so that the next time the
			// attribute is requested or the control is re-rendered it will
			// have the correct value - this is because calling setAttribute()
			// in some cases does not receive an appropriate response from the
			// browser
			attrs.value = this.value;
		} else {
			this.setAttribute("value", this.value);
		}
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
