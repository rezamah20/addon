function FindProxyForURL(url, host) {
	if (shExpMatch(url, "http*")) {
	return "SOCKS5 102.36.127.53:1080";
	}
  return "SOCKS5 102.36.127.53:1080";
}
