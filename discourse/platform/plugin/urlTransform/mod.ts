declare var domainHost: string;

export function fix_avatar_template(avatar_url: string) {
    // var avatar_url = avatar_url.format(size='20')
    var default_http_prefix = /http:\/\//gi
    var full_url = avatar_url
    if (avatar_url.startsWith('https')===false) {
        // avatar_url = avatar_url.replace(default_http_prefix, domainHost)
        full_url = avatar_url.replace(default_http_prefix, '')
        // avatar_url = (domainHost + )
        full_url = (domainHost + full_url)
    }
    return full_url
}