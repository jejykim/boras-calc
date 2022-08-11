package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.BlockIpVO;

@Mapper
public interface BlockIpMapper {

	/**
	 * 신규 차단 IP 등록
	 * @param 
	 * @return int
	 */
	public int insertBlockIp(BlockIpVO blockIpVO);
	
	/**
	 * 차단 IP 수정
	 * @param 
	 * @return int
	 */
	public int updateBlockIp(BlockIpVO blockIpVO);
	
	/**
	 * 차단 이력 확인
	 * @param 
	 * @return int
	 */
	public int isBlockIp(BlockIpVO blockIpVO);
	
	/**
	 * 차단 IP 상세 확인
	 * @param 
	 * @return BlockIpVO
	 */
	public BlockIpVO selectBlockIp(BlockIpVO blockIpVO);
	
	/**
	 * 차당 IP 목록
	 * @param 
	 * @return List<BlockIpVO>
	 */
	public List<BlockIpVO> selectBlockIpList();
}
