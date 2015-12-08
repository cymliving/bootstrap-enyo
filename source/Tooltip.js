bootstrap.TooltipTrigger = enyo.mixin({
	published: {
		triggers: ["hover", "focus"], // hover, focus, click
		tooltipContent: "",
		tooltipPlacement: "top",
		tooltipDelay: 0
	},
	initializeTip: function(){
		if (!this.tip) {
			this.tip = this.createComponent({
				kind:"bootstrap.Tooltip",
				content: this.tooltipContent,
				delay: this.tooltipDelay,
				placement: this.tooltipPlacement
			});
			this.tip.render();
		}
	},
  tooltipContentChanged: function() {
    if(this.tip) {
      this.tip.set('content', this.tooltipContent);
      this.tip.applyContent();
    }
  },
  tooltipDelayChanged: function() {
    if(this.tip) {
      this.tip.set('delay', this.tooltipDelay);
    }
  },
  tooltipPlacementChanged: function() {
    if(this.tip) {
      this.tip.set('placement', this.tooltipPlacement);
    }
  }
}, bootstrap.TipTrigger);

enyo.kind({
	name: "bootstrap.Tooltip",
	mixins: [ "bootstrap.TipPositioner" ],
	classes: "tooltip",
	published: {
		content: "",
	},
	components: [
		{kind: "bootstrap.TooltipInner"},
		{kind: "bootstrap.TooltipArrow"}
	],
	applyContent: function(){
		this.$.tooltipInner.$.text.setContent(this.content);
	}
});

enyo.kind({
	name: "bootstrap.TooltipInner",
	classes: "tooltip-inner",
	components: [
		{tag: "span", name: "text", allowHtml: true}
	]
});

enyo.kind({
	name: "bootstrap.TooltipArrow",
	classes: "tooltip-arrow"
});
