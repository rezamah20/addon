function FindProxyForURL(url, host) {
	if (shExpMatch(url, "http*")) {
	return "HTTP 127.0.0.1:8080";
	}
  return "HTTP 127.0.0.1.1:8080";
}
