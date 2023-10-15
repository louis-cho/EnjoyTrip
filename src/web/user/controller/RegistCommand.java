package web.user.controller;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import web.controller.Command;
import web.user.dto.User;
import web.user.service.UserService;
import web.user.service.UserServiceImpl;

public class RegistCommand implements Command {
	
	UserService userService = null;

	public RegistCommand() {
		userService = UserServiceImpl.getInstance();
	}

	@Override
	public void service(HttpServletRequest request, HttpServletResponse response, Map<String, String> js,
			Map<String, Object> map) throws Exception {
		String id = js.get("id");
		String pw = js.get("password");
		String name = js.get("name");
		
		// null check
		if(id == null || pw == null || name == null ) {
			throw new Exception("회원가입을 위한 값들(id, pw, name)을 모두 입력해주세요");
		}
		
		User userDto = new User(id, pw, name);
		
		int cnt = userService.regist(userDto);
		System.out.println("CNT"+" "+cnt);
		
		if (cnt == 1) { // 회원가입 성공
			map.put("msg", "registOK");
		} else { // 회원가입 실패
			map.put("msg", "registFail");
		}

	}

}
