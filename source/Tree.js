enyo.kind({
	name: "bootstrap.Tree",
  tag: "li",
  handlers: {
    ontap: "treeTap"
  },
  published: {
    label: "",
    showTree: false,
    treeComponents: null,
    treeIcon: null
  },
  components: [
    // {name: "icon", tag: "span", showing: false, classes: "fa"},
    {name: "label", allowHtml: true, tag: "label", classes: "tree-toggler nav-header"},
    {kind: "bootstrap.Nav", type: "list", classes: "tree", defaultKind: "bootstrap.MenuItem"}
  ],
  bindings: [
    {from: ".label", to: ".$.lable.content"},
    {from: ".showTree", to: ".$.nav.showing"}
  ],
  initComponents: function(inSender, inEvent){
    this.inherited(arguments);
    if(this.treeIcon && this.label) {
      this.addIconLabel();
    } else if(this.label) {
      this.$.label.setContent(this.label);
    }

    if(this.treeComponents) {
      this.$.nav.createComponents(this.treeComponents);
    }
    if(this.showTree) {
      this.showTreeChanged();
    }
  },
  treeTap: function(inSender, inEvent) {
    var org = inEvent.originator;

    if(org.hasClass("tree-toggler")) {
      this.setShowTree(!this.showTree);
    }

    return true;
  },
  showTreeChanged: function() {
    this.addRemoveClass('open', this.showTree);
  },
  addIconLabel: function() {
    this.$.label.setContent(
      "<span class='fa " + this.treeIcon + "'></span>" + this.label
    );
  }
});
