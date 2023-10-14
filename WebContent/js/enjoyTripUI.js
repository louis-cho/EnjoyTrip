export class enjoyTripUI {
	
	constructor() {
		enjoyTripUI.DefaultValues = {};
		
	}
	
	static setCookie(key, value) {
	    document.cookie = key + "=" + value + ";";
	}
	
	
	static deleteCookie(key) {
	    document.cookie = key + "=null;";
	}
	
	static getCookie(key) {
	    const cookies = document.cookie.split("; ");
	    for (const cookie of cookies) {
	        const [name, value] = cookie.split("=");
	        if (name === key) {
	            return decodeURIComponent(value);
	        }
	    }
	    return null; // 키에 해당하는 쿠키를 찾지 못한 경우
	}
}
