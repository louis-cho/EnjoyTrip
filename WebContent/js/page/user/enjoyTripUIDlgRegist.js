export class enjoyTripUIDlgRegist {
	

	constructor(name, app, div_elem) {
		   // 앱 이름
        this._name = name;
        // 앱
        this._app = app;
        // 앱 루트 HTML DIV
        this._div = div_elem;

        // 다이얼로그 보이기 플래그
        this._show = false;

        enjoyTripUIDlgRegist.I = this;
        
        this._div.innerHTML = this._appElementHTML(name);
        
        this._dialog = $(this._div).dialog({
        	  autoOpen: false,
              height: "auto",
              width: "auto",
              modal: false,
              closeOnEscape: false,
              resizable: false,
              title: "회원가입",
              buttons: {
                  "Close": function () {
                	  enjoyTripUIDlgRegist.I._dialog.dialog("close");
                  },
                  "Regist": function () {
                	  enjoyTripUIDlgRegist.I.OnRegist();
                  }
              },
              close: function () {
            	  enjoyTripUIDlgRegist.I._show = false;
              }
        });
        
	}
	
	  /**
     * 설정값을 적용한다
     * */
    OnRegist() {

        this.UpdateUI();
        this._app.UpdateUIState();
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
ihtml[idx++] = '<p class="validateTips">All form fields are required.</p>';
       
ihtml[idx++] = '<form>';
ihtml[idx++] = '<fieldset>';
ihtml[idx++] = '<label for="name">Name</label>';
ihtml[idx++] = '     <input type="text" name="name" id="name" value="Jane Smith" class="text ui-widget-content ui-corner-all">';
ihtml[idx++] = '     <label for="email">Email</label>';
ihtml[idx++] = '     <input type="text" name="email" id="email" value="jane@smith.com" class="text ui-widget-content ui-corner-all">';
ihtml[idx++] = '     <label for="password">Password</label>';
ihtml[idx++] = '     <input type="password" name="password" id="password" value="xxxxxxx" class="text ui-widget-content ui-corner-all">';
       
ihtml[idx++] = '     <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">';
ihtml[idx++] = '   </fieldset>';
ihtml[idx++] = ' </form>';
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

