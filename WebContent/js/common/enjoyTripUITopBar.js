// dialog import
import { enjoyTripUIDlgRegist } from '../page/user/enjoyTripUIDlgRegist.js';
import { enjoyTripUIDlgLogin } from '../page/user/enjoyTripUIDlgLogin.js';



export class enjoyTripUITopBar {
	constructor(name, app, div_elem) {
		
		this._name = name;
		
		this._app = app;
		
		this._div = div_elem;
		
		this._div.innerHTML = this._appElementHTML(name);
		
		this._div_openDlgLogin = document.getElementById(name + "_openDlgLoginBtn");
		
		this._div_dlgLogin = document.getElementById(name + "_dlgLogin");
		
		this._div_openDlgRegist = document.getElementById(name + "_openDlgRegistBtn");

		this._div_dlgRegist = document.getElementById(name + "_dlgRegist");
		
		this._dlgLogin = new enjoyTripUIDlgLogin(this._name, this._app, this._div_dlgLogin);
        
        this._dlgRegist = new enjoyTripUIDlgRegist(this._name, this._app, this._div_dlgRegist);
		
        enjoyTripUITopBar.I = this;
        
        this._div_openDlgLogin.addEventListener("click", function() {
        	enjoyTripUITopBar.I._dlgLogin.ShowDialog();
        });
        
        this._div_openDlgRegist.addEventListener("click", function() {
        	enjoyTripUITopBar.I._dlgRegist.ShowDialog();
        });
        

        
	}
	
	_appElementHTML(name) {
        
		let ihtml = [];
		let idx = 0;
		
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
	
	
	
}