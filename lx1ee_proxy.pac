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
        dnsDomainIs(host, "*github.com") ||
        dnsDomainIs(host, "github.com") ||
        dnsDomainIs(host, "copilot-proxy.githubusercontent.com") ||
        dnsDomainIs(host, "origin-tracker.githubusercontent.com") ||
        dnsDomainIs(host, "*.githubcopilot.com") ||
        dnsDomainIs(host, "*githubcopilot.com") ||
        dnsDomainIs(host, "githubcopilot.com") ||
        dnsDomainIs(host, "individual.githubcopilot.com") ||
        dnsDomainIs(host, "copilot.githubusercontent.com") ||
        dnsDomainIs(host, "uizard.io")||
        dnsDomainIs(host, "proxy6.net")
    ) {
        return "PROXY 177.234.140.61:8000";
    }
    return "DIRECT";
}