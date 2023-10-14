package web.controller;

import java.util.HashMap;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class XmlBeanFactory {

	HashMap<String, Command> beans;

	XmlBeanFactory(String path) throws Exception {
		beans = new HashMap<>();
		SAXParserFactory factory = SAXParserFactory.newInstance();
		SAXParser parser = factory.newSAXParser();
		parser.parse(path, new MyDefaultHandler());
	}

	public HashMap<String, Command> getBeans() {
		return beans;
	}
	
	// inner class로 DefaultHandler 상속받아 만들기
	class MyDefaultHandler extends DefaultHandler {
		String id = null;
		String className = null;
		
		@Override
		public void startElement(String uri, String localName, String qName, Attributes attributes)
				throws SAXException {
			if("bean".equals(qName)) {
				id = attributes.getValue("id");
				className = attributes.getValue("class");
			}
		}
		
		@Override
		public void endElement(String uri, String localName, String qName) throws SAXException {
			if("bean".equals(qName)) {
				try {
					Command o = (Command) Class.forName(className).getConstructor().newInstance();
					beans.put(id, o);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}
}
