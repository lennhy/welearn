FlowRouter.route("/", {
  name: "home",
  action() {
    BlazeLayout.render("layout", {
      header: "header",
      content: "content"
    });
  }
});
