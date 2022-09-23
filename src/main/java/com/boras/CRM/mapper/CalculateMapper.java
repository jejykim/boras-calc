package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.CalculateVO;
import com.boras.CRM.vo.ContractVO;

@Mapper
public interface CalculateMapper {
	
	/**
	 * 정산 등록
	 * @param CalculateVO
	 * @return int
	 * 
	 */
	public int insertCalculate(CalculateVO calculateVO);
	
	/**
	 * 정산 된 계출목록 조회
	 * @param CalculateVO
	 * @return
	 */
	public List<CalculateVO> selectCalculateList(CalculateVO calculateVO);
	
	/**
	 * 정산 목록 갯수
	 * @param CalculateVO
	 * @return int
	 * 
	 */
	public int selectCalculateListCount(CalculateVO calculateVO);
	
	/**
	 * 정산 합 조회
	 * @param CalculateVO
	 * @return
	 */
	public CalculateVO selectCalculateForAg(CalculateVO calculateVO);
	
	/**
	 * 정산 상세 조회(원장&계출)
	 * @param CalculateVO
	 * @return
	 */
	public CalculateVO selectCalculateInfo(int contractSeq);
	
	/**
	 * 정산 합 조회
	 * @param CalculateVO
	 * @return
	 */
	public CalculateVO selectCalculateForAgAndFilter(CalculateVO calculateVO);
	
	/**
	 * 관리자용 정산목록
	 * @param CalculateVO
	 * @return
	 */
	public List<CalculateVO> selectCalculateListByAdmin(CalculateVO calculateVO);
	
	/**
	 * 정산 합 조회- 관리자용
	 * @param CalculateVO
	 * @return
	 */
	public CalculateVO selectCalculateSumByAdmin(CalculateVO calculateVO);
	
	/**
	 * 관리자용 정산상세 목록
	 * @param CalculateVO
	 * @return
	 */
	public List<CalculateVO> selectCalculateInfoListByAdmin(CalculateVO calculateVO);
	
	/**
	 * 관리자용 정산상세 유저 정보용
	 * @param CalculateVO
	 * @return
	 */
	public CalculateVO selectCalculateUserInfoByAdmin(CalculateVO calculateVO);
	
	/**
	 * 관리자용 정산상세 합표출용
	 * @param CalculateVO
	 * @return
	 */
	public CalculateVO selectCalculateSumInfoByAdmin(CalculateVO calculateVO);
	
	/**
	 * 관리자용 정산상세 캐피탈조회용
	 * @param CalculateVO
	 * @return
	 */
	public List<CalculateVO> selectCalculateInfoForFinancialList(CalculateVO calculateVO);
}
