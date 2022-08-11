package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.BlockIdMapper;
import com.boras.CRM.vo.BlockIdVO;

@Service
public class BlockIdService implements BlockIdMapper {

	@Autowired
	BlockIdMapper blockIdMapper;
	
	@Override
	public int insertBlockId(BlockIdVO blockIdVO) {
		return blockIdMapper.insertBlockId(blockIdVO);
	}

	@Override
	public int updateBlockId(BlockIdVO blockIdVO) {
		return blockIdMapper.updateBlockId(blockIdVO);
	}

	@Override
	public int isBlockId(BlockIdVO blockIdVO) {
		return blockIdMapper.isBlockId(blockIdVO);
	}

	@Override
	public BlockIdVO selectBlockId(BlockIdVO blockIdVO) {
		return blockIdMapper.selectBlockId(blockIdVO);
	}

	@Override
	public List<BlockIdVO> selectBlockIdList(BlockIdVO blockIdVO) {
		return blockIdMapper.selectBlockIdList(blockIdVO);
	}

}
