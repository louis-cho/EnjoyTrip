package web.controller;

import java.beans.Beans;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/main")
public class DispatcherServlet extends HttpServlet {

	HashMap<String, Command> beans;

	public void init() throws ServletException {
		String path = getServletContext().getRealPath("/WEB-INF/beans.xml");
		try {
			XmlBeanFactory factory = new XmlBeanFactory(path);
			beans = factory.getBeans();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("/text/html;charset=utf-8");
		response.setContentType("application/x-json;charset=utf-8");
		PrintWriter out = response.getWriter();

		ObjectMapper om = new ObjectMapper();
		Map<String, Object> map = new HashMap<>();

		Map<String, String> js = om.readValue(request.getInputStream(), new TypeReference<Map<String, String>>() {});
		String sign = js.get("sign");
		System.out.println("sign >> " + sign);

		if (sign != null) {
			System.out.println(beans);
			System.out.println(beans.get(sign));

			try {
				beans.get(sign).service(request, response, js, map);
			} catch (Exception e) {
				e.printStackTrace(); // 나중에 지울 디버깅
				response.setStatus(400);
				map.put("msg", e.getMessage());
			}

			String retJson = om.writeValueAsString(map);
			out.append(retJson); // loginId 데이터를 out에 넣어서 리턴
		}
	}

}
