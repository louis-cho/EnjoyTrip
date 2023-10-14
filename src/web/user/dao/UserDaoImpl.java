package web.user.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Savepoint;

import web.user.dto.User;
import web.util.DBUtil;


public class UserDaoImpl implements UserDao {

	private static UserDao instance = null;

	private UserDaoImpl() {
	}

	public static UserDao getInstance() {
		if (instance == null) {
			instance = new UserDaoImpl();
		}
		return instance;
	}

	@Override
	public int signup(User userDto, byte[] salt, byte[] seckey, String iv) throws Exception {

		return 0;
	}

	@Override
	public void checkUserid(String userid) throws Exception {


	}

	@Override
	public String login(User user) throws Exception {
		Connection con = null;
		PreparedStatement stmt = null;
		try {
			con = DBUtil.getInstance().getConnection();
			stmt = con.prepareStatement("select name from members where id=? and pw=?");
			stmt.setString(1, user.getId());
			stmt.setString(2, user.getPassword());

			ResultSet rs = stmt.executeQuery();
			if (rs.next()) {
				String id = rs.getString(1);
				System.out.println("성공적으로 id >> " + id + " 반환 UserDaoImpl");
				return id;
			}

			return null;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtil.getInstance().close(stmt, con);
		}

		return null;
	}

	@Override
	public String getUserPassword(String userid) throws Exception {
		return "";
	}

	@Override
	public byte[] getSalt(String userid) throws Exception {
		return null;

	}

	
	@Override
	public byte[] getSeckey(String userid) throws Exception {
		return null;
	}

}
