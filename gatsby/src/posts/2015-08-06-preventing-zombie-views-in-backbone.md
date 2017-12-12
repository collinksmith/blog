---
title: "Preventing Zombie Views in Backbone"
tags: javascript, backbone
---

I mentioned in yesterday's post that you should always use Backbone's `events` hash to set listeners for DOM events because it allows you to remove the listeners when you get rid of your view. These events will be automatically eliminated when you call backbone's `remove` method. If you don't remove the event listeners, then the view instances remain in memory. These are known as zombie views.

It's the Backbone router's job to make sure that you call the builtmethod  in `remove` method on any views that you're not using any more. This can be easily accomplished by adding a `_swapViews` function to your router:

{% highlight javascript %}
_swapViews(view): function () {
  _currentView && _currentView.remove();
  _currentView = view;
  this.$rootEl.html(view.render().$el);
}
{% endhighlight %}
    
This will first call remove on the router's `_currentView`, if it exists. It then sets the `_currentView` to the view that's passed in. Finally, it adds the new view's html to the DOM.

With this set up, you can simply call the swapViews method in every router method, where you would normally render the new view, and it will make sure the old view is removed in addition.