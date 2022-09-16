package com.boras.CRM.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.boras.CRM.services.BlockIpService;
import com.boras.CRM.services.InquiryService;
import com.boras.CRM.util.BlockHelper;
import com.boras.CRM.util.InquiryHelper;

@Component
public class StartUpComponent {

	@Autowired
	private BlockIpService blockIpService;
	
	@Autowired
	private InquiryService inquiryService;
	
	@EventListener(ContextRefreshedEvent.class)
	public void contextRefreshedEvent() {
		BlockHelper.setInitBlockIpList(blockIpService);
		
		InquiryHelper.setInitInquiryList(inquiryService);
	}
	
}
