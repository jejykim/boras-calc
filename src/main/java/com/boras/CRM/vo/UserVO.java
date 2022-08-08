package com.boras.CRM.vo;

public class UserVO {

	// 아이디
	private String userId;
	
	// 비밀번호
	private String userPw;
	
	// 사용자명
	private String userName;
	
	// 사용자 이메일
	private String userEmail;
	
	// 사업자 구분 코드
	private int userBusinessTypeCd;
	
	// 사업자 구분 코드명
	private String userBusinessTypeCdName;
	
	// AG 사명
	private String userAgCompany;
	
	// 가입일
	private String userJoinDate;
	
	// 권한 코드
	private int userPermissionCd;
	
	// 권한 코드명
	private String userPermissionCdName;
	
	// 사용여부
	private String userUseYn;
	
	// 마지막 접속일
	private String userLastAccessDate;
	
	// 마지막 접속 IP
	private String userLastAccessIp;
	
	// 마지막 비밀번호 변경일
	private String userLastPwUpdateDate;
	
	// salt
	private String userSalt;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserPw() {
		return userPw;
	}

	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getUserBusinessTypeCd() {
		return userBusinessTypeCd;
	}

	public void setUserBusinessTypeCd(int userBusinessTypeCd) {
		this.userBusinessTypeCd = userBusinessTypeCd;
	}

	public String getUserBusinessTypeCdName() {
		return userBusinessTypeCdName;
	}

	public void setUserBusinessTypeCdName(String userBusinessTypeCdName) {
		this.userBusinessTypeCdName = userBusinessTypeCdName;
	}

	public String getUserAgCompany() {
		return userAgCompany;
	}

	public void setUserAgCompany(String userAgCompany) {
		this.userAgCompany = userAgCompany;
	}

	public String getUserJoinDate() {
		return userJoinDate;
	}

	public void setUserJoinDate(String userJoinDate) {
		this.userJoinDate = userJoinDate;
	}

	public int getUserPermissionCd() {
		return userPermissionCd;
	}

	public void setUserPermissionCd(int userPermissionCd) {
		this.userPermissionCd = userPermissionCd;
	}

	public String getUserPermissionCdName() {
		return userPermissionCdName;
	}

	public void setUserPermissionCdName(String userPermissionCdName) {
		this.userPermissionCdName = userPermissionCdName;
	}

	public String getUserUseYn() {
		return userUseYn;
	}

	public void setUserUseYn(String userUseYn) {
		this.userUseYn = userUseYn;
	}

	public String getUserLastAccessDate() {
		return userLastAccessDate;
	}

	public void setUserLastAccessDate(String userLastAccessDate) {
		this.userLastAccessDate = userLastAccessDate;
	}

	public String getUserLastAccessIp() {
		return userLastAccessIp;
	}

	public void setUserLastAccessIp(String userLastAccessIp) {
		this.userLastAccessIp = userLastAccessIp;
	}

	public String getUserLastPwUpdateDate() {
		return userLastPwUpdateDate;
	}

	public void setUserLastPwUpdateDate(String userLastPwUpdateDate) {
		this.userLastPwUpdateDate = userLastPwUpdateDate;
	}

	public String getUserSalt() {
		return userSalt;
	}

	public void setUserSalt(String userSalt) {
		this.userSalt = userSalt;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

}
