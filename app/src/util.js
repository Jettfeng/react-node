export function getRdirectPath({type,avatar}){
    // 根据用户信息跳转页面地址
    // user.type/boss/genius
    // user.avatar /bossinfo/genuisinfo
    let url = (type==='boss')?'/boss':'/genius'
    if(!avatar){
        url+= 'info'
    }
    return url
}