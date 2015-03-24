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
	classes: "form-control",
  published: {
    placeholder: null
  },
  create: function() {
    this.inherited(arguments);
    if (this.placeholder) {
      this.attributes.placeholder = this.placeholder;
    }
  }
});

enyo.kind({
	name: "bootstrap.DateInput",
  kind: "enyo.Input",
  type: "date",
	classes: "form-control"
});

enyo.kind({
	name: "bootstrap.NumberInput",
  kind: "enyo.Input",
  type: "number",
	classes: "form-control"
});

enyo.kind({
	name: "bootstrap.SelectInput",
  kind: "enyo.Select",
	classes: "form-control",
  published: {
    active: '',
    disabled: false,
    attributes : {disabled: false}
  },
  handlers: {
    onchange: 'updateActive'
  },
  bindings: [
    {from: '.active', to: '.selected', transform: function(val) {
      var selected = -1,
          value = val+'';

      enyo.forEach(this.getOptions(), function(option, idx) {
        if ((option.value+'') === value) {
          selected = idx;
        }
      });

      return selected;
    }}
  ],
  create: function() {
    this.inherited(arguments);
    this.disabledChanged();
  },
  updateActive: function() {
    this.set('active', this.getValue());
  },
  disabledChanged: function() {
    if(this.disabled) {
      this.setAttribute("disabled", true);
    } else {
      this.setAttribute("disabled", false);
    }
  },
  getOptions: function() {
    var options = [];

    function pushOptions(children){
      enyo.forEach(children, function(child) {
        if(child.kind == "enyo.Option"){
          options.push(child);
        } else if(child.children.length) {
          pushOptions(child.children);
        }
      });
    }

    pushOptions(this.children);

    return options;
  }
});

enyo.kind({
	name: "bootstrap.TextArea",
  kind: "enyo.TextArea",
	classes: "form-control",
  published: {
    placeholder: null
  },
  create: function() {
    this.inherited(arguments);
    if (this.placeholder) {
      this.attributes.placeholder = this.placeholder;
    }
  }
});

enyo.kind({
	name: "bootstrap.Checkbox",
	classes: "checkbox",
	tag: "label",
  published: {
    //* Value of label span
    label: null,
    //* true for inline checkboxs
    inline: false,
	  //* Value of checkbox; true if checked
    checked: false
  },
	components: [
		{kind: "enyo.Checkbox", name: "checkbox"},
		{name: "label", tag: "span" }
	],
  rendered: enyo.inherit(function (sup) {
		return function() {
			sup.apply(this, arguments);
      this.setupComponents();
			this.checkedChanged();
      this.setupClasses();
		};
	}),
	checkedChanged: function() {
		this.$.checkbox.setNodeProperty("checked", this.checked);
		this.$.checkbox.setAttribute("checked", this.checked ? "checked" : "");
		this.$.checkbox.setActive(this.checked);
	},
  setupClasses: function() {
    if(this.inline) {
      this.removeClass("checkbox");
      this.addClass("checkbox-inline");
    }
  },
  setupComponents: function() {
    if(this.label) {
      this.$.label.setContent(this.label);
    }
  }
})

enyo.kind({
  name: "bootstrap.FormSectionHeader",
  classes: "form-section-header",
  published: {
    type: "default",// default || primary || success || info || warning || danger || link,
    size: false
  },
  components: [
    { tag: "span", classes: "pull-left", name: "header"}
  ],
  bindings: [
    { from: ".content", to: ".$.header.content"}
  ],
  create: function() {
		this.inherited(arguments);
    this.typeChanged();
		this.setupClasses();
	},
  typeChanged: function () {
    if(this.type) {
      this.removeClass(this.oldType);
      this.addClass(this.type);
    }
    this.oldType = this.type;
  },
	setupClasses: function(){
    if(this.size) {
      this.addClass("col-md-" + this.size);
    }
	}
})
