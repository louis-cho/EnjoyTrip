package web.user.dao;

import web.user.dto.User;

public interface UserDao {

	public int signup(User userDto, byte[] salt, byte[] seckey2, String iv2) throws Exception;

	public void checkUserid(String userid) throws Exception;

	public String login(User userDto) throws Exception;

	public String getUserPassword(String userid) throws Exception;

	public byte[] getSalt(String userid) throws Exception;
	
	public byte[] getSeckey(String userid) throws Exception;

}
