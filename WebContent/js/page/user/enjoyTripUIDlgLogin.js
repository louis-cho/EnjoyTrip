export class enjoyTripUIDlgLogin {
	

	constructor(name, app, div_elem) {
		   // 앱 이름
        this._name = name;
        // 앱
        this._app = app;
        // 앱 루트 HTML DIV
        this._div = div_elem;

        // 다이얼로그 보이기 플래그
        this._show = false;

        enjoyTripUIDlgLogin.I = this;
        
        this._div.innerHTML = this._appElementHTML(name);
        
        this._dialog = $(this._div).dialog({
        	  autoOpen: false,
              height: "auto",
              width: "auto",
              modal: false,
              closeOnEscape: true,
              resizable: false,
              title: "로그인",
              buttons: {
                  "Close": function () {
                	  enjoyTripUIDlgLogin.I._dialog.dialog("close");
                  },
                  "Login": function () {
                	  enjoyTripUIDlgLogin.I.OnLogin();
                  }
              },
              close: function () {
            	  enjoyTripUIDlgLogin.I._show = false;
              }
        });
        
        this._id_input = document.getElementById(name + "_login_id");
        this._pw_input = document.getElementById(name + "_login_password");
        
	}
	
	  /**
     * 설정값을 적용한다
     * */
    OnLogin() {
    	
    	this._app.MenuLogin(this._id_input.value, this._pw_input.value);
        this.UpdateUI();
        this._app.UpdateUIState();
        this.CloseDialog();
    };
    
	 /**
     * UI를 갱신한다
     * */
    UpdateUI() {

        this._app.UpdateUI();
    };

    /**
     * Setting Dialog에 대한 html element를 작성한다
     * 
     * @param {String} name 다른 앱과 구분하기 위한 이름
     * @return {String} HTML 문자열
     */
    _appElementHTML(name) {

        var ihtml = [];
        var idx = 0;

		ihtml[idx++] = '<div id="dialog-form" title="Create new user">';
		ihtml[idx++] = '	<p class="validateTips">All form fields are required.</p>';   
		ihtml[idx++] = '	<form>';
		ihtml[idx++] = '		<fieldset>';
		ihtml[idx++] = '			<label for="name">ID</label>';
		ihtml[idx++] = '     		<input type="text" name="id" id="' + name + '_login_id" value="아이디" class="text ui-widget-content ui-corner-all">';
		ihtml[idx++] = '     		<label for="password">Password</label>';
		ihtml[idx++] = '     		<input type="password" name="password" id="' + name + '_login_password" value="xxxxxxx" class="text ui-widget-content ui-corner-all">';
		ihtml[idx++] = '     		<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">';
		ihtml[idx++] = '   		</fieldset>';
		ihtml[idx++] = ' 	</form>';
		ihtml[idx++] = '</div>';
   

        return ihtml.join("");
    };
    
    /**
     * setting dialog를 보여준다
     * */
    ShowDialog() {
        if (this._show)
            return;

        this.UpdateUI();
        this._dialog.dialog("open");
        this._show = true;
    }

    /**
     * dialog를 닫는다
     * */
    CloseDialog() {
        this._dialog.dialog("close");
        this._app.UpdateUIState();
    }
    
    

}

