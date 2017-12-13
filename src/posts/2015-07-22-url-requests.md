---
title: "URL Requests"
tags: internet
---

Here's what happens behind the scenes when you type in a url in your browser and hit enter:

1. The browser checks its cache for a non-expired, cached response body for the url. If it finds it, it doesn't bother connecting to the url, and instead it just renders the response that it has cached (skip to step 7).
  * Thi is uncommon. Most modern websites give their cache expiry timestamps a value of -1, which means they expire immediately.

2. The browser checks the operating system for the IP address of that url. If it finds it, it skips the IP address lookup and goes straight to that IP address (skip to step 4).
  * This is what usually happens - the OS is good about storing this info for sites you've visited before.

3. A DNS lookup initiates. It has three steps:
  * <em>Root query</em> - The browser goes to one of ~13 root servers that exist, and it tells it the IP address of a server where you can find IPs for websites of the top-level-domain you're looking for (e.g. .com)
  * <em>TLD query</em> - This next server gives you the IP of the nameserver you're looking for (e.g. google).
  * <em>Nameserver query</em> - The nameserver gives you the exact IP address for the specific url you're looking for.

4. The client opens a TCP socket to connect to the server.

5. The client makes an HTTP request

6. The server formulates the correct response
  * This is all the stuff that Rails does.

7. The browser decodes the HTTP response.