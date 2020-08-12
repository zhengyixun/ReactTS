//写cookie
export const setCookie = (name, value, day = 30) => {
    let exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};
//读cookie
export const getCookie = (name) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};
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
        }
        str = `${y}-${m}-${d} ${n}`;
    } else {
        str = y + '-' + m + '-' + d;
    }
    return str;
};


