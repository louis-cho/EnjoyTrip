package web.user.service;

import javax.servlet.http.HttpSession;

import web.user.dto.User;


public interface UserService {

	public int regist(User userDto) throws Exception;

	public void checkUserid(String userid) throws Exception;

	public String login(User userDto) throws Exception;

	public String getUserPassword(String userid) throws Exception;

	public boolean logcheck(String cookieid, HttpSession session) throws Exception;


}