enyo.kind({
	name: "bootstrap.Tree",
  tag: "li",
  handlers: {
    ontap: "treeTap"
  },
  published: {
    label: "",
    opened: false,
    treeComponents: null,
    treeIcon: null
  },
  components: [
    {name: "label", allowHtml: true, tag: "label", classes: "tree-toggler nav-header", attributes: { "data-toggle": "collapse", "data-target": "", "aria-expanded": "false", "aria-controls": ""}},
    {kind: "bootstrap.Nav", type: "list", classes: "tree collapse", defaultKind: "bootstrap.MenuItem"}
  ],
  bindings: [
    {from: ".label", to: ".$.lable.content"}
  ],
  initComponents: function(inSender, inEvent){
    this.inherited(arguments);
    this.$.label.setAttribute("data-target", "#" + this.$.nav.get('id'));
    this.$.label.setAttribute("aria-controls", this.$.nav.get('id'));
    this.$.label.render();
    if(this.treeIcon && this.label) {
      this.addIconLabel();
    } else if(this.label) {
      this.$.label.setContent(this.label);
    }

    if(this.treeComponents) {
      this.$.nav.createComponents(this.treeComponents);
    }
  },
  treeTap: function(inSender, inEvent) {
    var org = inEvent.originator;

    if(org.hasClass("tree-toggler")) {
      this.setOpened(!this.opened);
      this.$.nav.addRemoveClass("in", this.opened);
      //TODO: Add css to support "in" sliding transition.
    }

    return true;
  },
  addIconLabel: function() {
    this.$.label.setContent(
      "<span class='fa " + this.treeIcon + "'></span>" + this.label
    );
  }
});
