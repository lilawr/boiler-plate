
const COOKIE_IDS = {
    NOTICE_SEEN: "NOTICE_SEEN"
}

const currentCookieId = COOKIE_IDS.NOTICE_SEEN;

const getCookie = (key, cookies) => {
    if(cookies) {
        return cookies.get(key);
    }
}

const setCookie = (key, value, cookies) => {
    if(cookies) {
        return cookies.set(key, value, { path: '/' });
    }
}

const setSeenCookieMessage = (cookies) => {
        return setCookie(currentCookieId, 1, { path: '/' });
}

const getSeenCookieMessage = (cookies) => {
        return getCookie(currentCookieId, cookies) === "1";
}


export default {getSeenCookieMessage, setSeenCookieMessage}