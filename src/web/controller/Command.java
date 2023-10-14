package web.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Command {
	
	public void service(HttpServletRequest request, HttpServletResponse response, Map<String, String> js, Map<String, Object> map) throws Exception;

}

