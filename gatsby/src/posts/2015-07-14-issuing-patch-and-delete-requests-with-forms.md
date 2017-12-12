---
title: "Issuing PATCH and DELETE Requests with Forms"
tags: ruby, http
---

Browsers are only able to issue GET or POST requests to a server. However, the list of RESTUL actions includes PATCH and DELETE requests. In order to issue PATCH or DELETE requests to your server with Rails, you need to use a hack in your forms.

Here's how you'd specify a POST request in a form:

{% highlight ruby %}
<form action="users_url" method="post">
  ...
</form>
{% endhighlight %}
    
The `action` attribute specifies the path, and the `method` attributes specifies the HTTP verb. However, you can't simply change `method` to `patch` because the browser can't issue that request. Instead, you need to use a hidden input element to provide that information to Rails:

{% highlight ruby %}
<form action="users_url(@user)" method="post">
  <input type="hidden" name="_method" value="patch">
  ...
</form>
{% endhighlight %}

Now, when you submit this form, Rails will receieve `{ "_method" => "patch" }` as part of the params hash. Any time Rails sees this, it automatically uses it to supercede the HTTP request that was made by the browser (POST, in this case), and instead routes the request as if it were a PATCH request.