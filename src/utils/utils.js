//写cookie
export const setCookie = (name, value, day = 30) => {
    let exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};
//读cookie
export const getCookie = (cookiename) => {
    let cookiestring = document.cookie;
    let start = cookiestring.indexOf(cookiename + '= ');
    if (start === -1)   //   找不到
        return null;
    start += cookiename.length + 1;
    let end = cookiestring.indexOf("; ", start);
    if (end === -1) return unescape(cookiestring.substring(start));
    return unescape(cookiestring.substring(start, end));
};
//删cookie
export const delCookie = (name) => {
    if (name && name !== "") {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    } else {
        // eslint-disable-next-line no-useless-escape
        let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    }

};
//清除所有cookie
//日期时间位数补足
export const fullTime = (num) => {
    let d = String(num), n = "";
    if (d.length < 2) {
        n = "0" + d;
    } else {
        n = d;
    }
    return String(n);
};
//格式化日期
export const formatDateTime = (date) => {
    ///判断是否输出时间
    let arr = date.split(" ");
    let dn = new Date(date);
    let y = dn.getFullYear(), m = dn.getMonth() + 1, d = dn.getDate(), str = "";
    m = m < 10 ? '0' + m : m;
    d = d < 10 ? ('0' + d) : d;
    if (arr.length > 1) {
        let f = arr[1].split(":"), n = "";
        switch (f.length) {
            case 0:
                n = "00:00:00";
                break;
            case 1:
                n = `${fullTime(f[0])}:00:00`;
                break;
            case 2:
                n = `${fullTime(f[0])}:${fullTime(f[1])}:00`;
                break;
            case 3:
                n = `${fullTime(f[0])}:${fullTime(f[1])}:${fullTime(f[2])}`;
                break;
            default:
                n = "00:00:00";
        }
        str = `${y}-${m}-${d} ${n}`;
    } else {
        str = y + '-' + m + '-' + d;
    }
    return str;
};
//生成指定范围的随机数
export const randomNum = (min, max) => {
   return  parseInt(Math.random()*(max-min+1)+min,10)
}


