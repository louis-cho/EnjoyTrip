// dialog import
import { enjoyTripUIDlgRegist } from './page/user/enjoyTripUIDlgRegist.js';
import { enjoyTripUIDlgLogin } from './page/user/enjoyTripUIDlgLogin.js';

export class  enjoyTripUIApp {
	 constructor(name, div_elem, is_portlet, is_viewer) {

	        // 앱 버전
	        this._version = "v0.1";
	        // 앱 이름
	        this._name = name;

	        this._title = document.title;

	        // 앱 루트 HTML DIV
	        this._div = div_elem;

	        this._div.innerHTML = this._appElementHTML(name);

	        this._bInitApp = false;
	        
	        enjoyTripUIApp.I = this;

	        this._div_dlgLogin = document.getElementById(name + "_dlgLogin");
	        
	        this._div_dlgRegist = document.getElementById(name + "_dlgRegist");
	        
	        this._div_openDlgRegist = document.getElementById(name + "_openDlgRegistBtn");
	        
	        this._div_openDlgLogin = document.getElementById(name + "_openDlgLoginBtn");
	        

	        this._dlgLogin = new enjoyTripUIDlgLogin(this._name, this, this._div_dlgLogin);
	        
	        this._dlgRegist = new enjoyTripUIDlgRegist(this._name, this, this._div_dlgRegist);
	        
	        
	        this._div_openDlgRegist.addEventListener("click", function() {
	        	enjoyTripUIApp.I._dlgRegist.ShowDialog();
	        });
	        
	        this._div_openDlgLogin.addEventListener("click", function() {
	        	enjoyTripUIApp.I._dlgLogin.ShowDialog();
	        });
	        
	        this._user = {
	        		name: "",
	        		isLoggedIn: false
	        };
	 }
	 
	 UpdateUIState() {}
	 
	 UpdateUI(){}
	 
	 _appElementHTML(name) {

	        var ihtml = [];

	        var idx = 0;
	        
	        ihtml[idx] = "<button id='" + name + "_openDlgLoginBtn'>로그인</button>";
	        idx++;
	        
	        ihtml[idx] = "<button id='" + name + "_openDlgRegistBtn'>회원가입</button>";
	        idx++;
	        
	        ihtml[idx] = "<div class='' id='" + name + "_dlgLogin'></div>";
	        idx++;
	        
	        ihtml[idx] = "<div class='' id='" + name + "_dlgRegist'></div>";
	        idx++;

	      
	        return ihtml.join("");
	    }
	 
	 async MenuLogin(id, password) {
		 // 서버에게 요청 보내기
		 console.log("app MenuLogin() >> " + id + ": " + password);
		 
		 let body = {
				 sign: "login",
				 id,
				 password
		 };
		 
		 body = JSON.stringify(body);
		 
		 let rcvMsg = await fetch("/EnjoyTrip/main", {method: "post", body});
		 
		 rcvMsg = await rcvMsg.text();
		 try {
		 rcvMsg = JSON.parse(rcvMsg);
		 if(rcvMsg.msg == "LoginOK") {
			 console.log("로그인 성공");
			 console.log(rcvMsg);
			 enjoyTripUIApp.I._user = {
					 name: rcvMsg.name,
					 isLoggedIn: true
			 };
			 
			 // UI Update 수행하기
			 console.log("로그인한 유저 >> " + enjoyTripUIApp.I._user.name);
		 } else {
			 enjoyTripUIApp.I._user = null;
			 alert("일치하는 사용자가 없습니다. 올바른 아이디와 비밀번호를 입력해주세요.");
		 }
		 } catch(e) {
			 enjoyTripUIApp.I._user = null;
			 alert(`${e.name}: ${e.message}`);
		 }
		 
	 }
	 
	 MenuFetchPublicKey() {
		 
	 }
	 
	 
}