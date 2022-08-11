package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.BlockIdVO;

@Mapper
public interface BlockIdMapper {

	/**
	 * 신규 차단 ID 등록
	 * @param 
	 * @return int
	 */
	public int insertBlockId(BlockIdVO blockIdVO);
	
	/**
	 * 차단 ID 수정
	 * @param 
	 * @return int
	 */
	public int updateBlockId(BlockIdVO blockIdVO);
	
	/**
	 * 차단 이력 확인
	 * @param 
	 * @return int
	 */
	public int isBlockId(BlockIdVO blockIdVO);
	
	/**
	 * 차단 ID 상세 확인
	 * @param 
	 * @return BlockIdVO
	 */
	public BlockIdVO selectBlockId(BlockIdVO blockIdVO);
	
	/**
	 * 차당 ID 목록
	 * @param 
	 * @return List<BlockIdVO>
	 */
	public List<BlockIdVO> selectBlockIdList(BlockIdVO blockIdVO);
	
}
