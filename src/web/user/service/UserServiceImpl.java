package web.user.service;

import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import javax.servlet.http.HttpSession;

import web.user.dao.UserDao;
import web.user.dao.UserDaoImpl;
import web.user.dto.User;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;


public class UserServiceImpl implements UserService {

	private static UserService instance = null;
	

	public static UserService getInstance() {
		if (instance == null) {
			instance = new UserServiceImpl();
		}
		return instance;
	}

	@Override
	public int regist(User userDto) throws Exception {

		System.out.println(userDto);
		return UserDaoImpl.getInstance().regist(userDto);
	}



	@Override
	public void checkUserid(String userid) throws Exception {
		UserDaoImpl.getInstance().checkUserid(userid);
	}

	@Override
	public String login(User user) throws Exception {
		return UserDaoImpl.getInstance().login(user);
	}

	@Override
	public String getUserPassword(String userid) throws Exception {
		return UserDaoImpl.getInstance().getUserPassword(userid);
	}

	//////////////////

	@Override
	public boolean logcheck(String cookieid, HttpSession session) throws Exception {
		return true;
	}


}
