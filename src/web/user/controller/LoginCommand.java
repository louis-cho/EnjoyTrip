package web.user.controller;



import java.sql.Timestamp;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import web.controller.Command;
import web.user.service.UserServiceImpl;
import web.user.dto.User;
import web.user.service.UserService;


public class LoginCommand implements Command {

	UserService userService = null;

	public LoginCommand() {
		userService = UserServiceImpl.getInstance();
	}

	@Override
	public void service(HttpServletRequest request, HttpServletResponse response, Map<String, String> js,
			Map<String, Object> map) throws Exception {


		String id = js.get("id");
		String password = js.get("password");

		
		System.out.println(id+" "+password);

		// null check
		if (id == null || password == null) {
			throw new Exception("로그인을 위한 값들(id, pw)을 모두 입력해주세요");
		}

		User user = new User(id, password);
		
		String name = userService.login(user);
		
		if (name != null) { // 성공
			map.put("msg", "LoginOK");
			map.put("name", name);
		} else { 
			map.put("msg", "LoginFail");
		}
	}
}
