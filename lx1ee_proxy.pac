function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "medium.com") ||
        dnsDomainIs(host, "grok.com") ||
        dnsDomainIs(host, "x.ai") ||
        dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "ytimg.com") ||
        dnsDomainIs(host, "ggpht.com") ||
        dnsDomainIs(host, "googleapis.com") ||
        dnsDomainIs(host, "anthropic.com") ||
        dnsDomainIs(host, "openai.com") ||
        dnsDomainIs(host, "claude.ai") ||
        dnsDomainIs(host, "preply.com") ||
        dnsDomainIs(host, "linkedin.com") ||
        dnsDomainIs(host, "*.github.com") ||
        dnsDomainIs(host, "copilot.githubusercontent.com") ||
        dnsDomainIs(host, "uizard.io")
    ) {
        return "PROXY 5.8.86.121:8000";
    }
    return "DIRECT";
}