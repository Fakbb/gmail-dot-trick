function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "dospindaan.com",
    "resubscribeOnInstall": true,
    "zoneId": 7667179,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://dospindaan.com/act/files/sw.perm.check.min.js?r=sw');
