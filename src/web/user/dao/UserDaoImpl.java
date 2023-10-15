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
		ResultSet rs = null;
		try {
			con = DBUtil.getInstance().getConnection();
			stmt = con.prepareStatement("select name from members where id=? and pw=?");
			stmt.setString(1, user.getId());
			stmt.setString(2, user.getPassword());

			rs = stmt.executeQuery();
			if (rs.next()) {
				String id = rs.getString(1);
				System.out.println("성공적으로 id >> " + id + " 반환 UserDaoImpl");
				return id;
			}

			return null;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtil.getInstance().close(rs, stmt, con);
		}

		return null;
	}
	
	@Override
	public int regist(User userDto) throws Exception {
		Connection con = null;
		PreparedStatement stmt = null;
		try {
			con = DBUtil.getInstance().getConnection();
			stmt = con.prepareStatement("insert into members(id,pw,name) values(?,?,?)");
			stmt.setString(1, userDto.getId());
			stmt.setString(2, userDto.getPassword());
			stmt.setString(3, userDto.getName());
			
			int ret = stmt.executeUpdate();
			if(ret == 1) {
				System.out.println("정상적으로 등록 완료");
			} else {
				throw new Exception("회원 등록 도중 에러 발생");
			}
			 return ret;
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtil.getInstance().close(stmt, con);
		}
		
		return -1;
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
