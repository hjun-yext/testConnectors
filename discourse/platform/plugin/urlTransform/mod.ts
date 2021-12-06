declare var domainHost: string;

export function fix_avatar_template(avatar_url: string) {
    // var avatar_url = avatar_url.format(size='20')
    // var default_http_prefix = /http:\/\//gi
    if (!avatar_url.startsWith('https')) {
        // avatar_url = (domainHost + avatar_url.replace(default_http_prefix, ''))
        avatar_url = (domainHost + avatar_url)
    }
    return avatar_url
}