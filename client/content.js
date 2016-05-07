import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.content.onCreated(function contentOnCreated() {

});

Template.content.helpers({
  test() {
    return "content";
  }
});

Template.content.events({

});
