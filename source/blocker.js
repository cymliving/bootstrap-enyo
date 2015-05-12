enyo.kind({
  name: 'bootstrap.Blocker',
  kind: 'FittableRows',
  classes: "enyo-fit",
  published: {
    title: null,
    message: null
  },
  components: [
    { classes: 'onyx-scrim enyo-fit onyx-scrim-translucent spinner-wrapper', components: [
      { classes: "spinner-container", components: [
        {classes: "spinner-holder", components: [
          { classes: 'fa fa-spinner fa-spin spinner' },
          { name: "title", tag: "h2", classes: "spinner-title"},
          { tag: "h2", classes: "spinner-message", components: [
            { name: "message", tag: "small"}
          ]}
        ]}
      ]}
    ]}
  ],
  bindings: [
    {from: ".title", to: ".$.title.content"},
    {from: ".message", to: ".$.message.content"}
  ]
});
