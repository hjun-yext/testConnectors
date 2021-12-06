declare var domainHost: string;

export function fix_avatar_template(avatar_url: string) {
    // var avatar_url = avatar_url.format(size='20')
    if (avatar_url.startsWith('https')==false) {
        avatar_url = (domainHost + avatar_url)
    }
    return avatar_url
}