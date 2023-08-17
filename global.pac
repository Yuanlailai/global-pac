function FindProxyForURL(url, host) {
    return "socks5 127.0.0.1:10808; PROXY 127.0.0.1:7890; PROXY 127.0.0.1:10809";
}
