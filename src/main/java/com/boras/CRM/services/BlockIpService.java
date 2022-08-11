package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.BlockIpMapper;
import com.boras.CRM.vo.BlockIpVO;

@Service
public class BlockIpService implements BlockIpMapper {

	@Autowired
	BlockIpMapper blockIpMapper;
	
	@Override
	public int insertBlockIp(BlockIpVO blockIpVO) {
		return blockIpMapper.insertBlockIp(blockIpVO);
	}

	@Override
	public int updateBlockIp(BlockIpVO blockIpVO) {
		return blockIpMapper.updateBlockIp(blockIpVO);
	}

	@Override
	public int isBlockIp(BlockIpVO blockIpVO) {
		return blockIpMapper.isBlockIp(blockIpVO);
	}

	@Override
	public BlockIpVO selectBlockIp(BlockIpVO blockIpVO) {
		return blockIpMapper.selectBlockIp(blockIpVO);
	}

	@Override
	public List<BlockIpVO> selectBlockIpList() {
		return blockIpMapper.selectBlockIpList();
	}

}
