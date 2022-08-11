package com.boras.CRM.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.boras.CRM.services.BlockIpService;
import com.boras.CRM.util.BlockIpHelper;

@Component
public class StartUpComponent {

	@Autowired
	private BlockIpService blockIpService;
	
	@EventListener(ContextRefreshedEvent.class)
	public void contextRefreshedEvent() {
		BlockIpHelper.setInitBlockIpList(blockIpService);
	}
	
}
