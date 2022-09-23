# CRM - calc
WEB - Spring boot  

## Version
**0.11.2**

## Version description
**[0.11.2]** 관리자 정산목록/상세 완료(엑셀다운제외)
**[0.11.1.20220923]** [bugfix]
	
	* 중복 처리 후 승인 시 AG 원장 목록 승인완료 미표시 (완료)
	* 중복 처리 후 다중 승인 불가 (완료)
	* 원장 excel 업로드 할 때 추가 프로모션 항목 추가 (완료)
	* 딜러사 수정시 차량가, 취득원가 0 수정됨 (완료)
	
**[0.11.0]** 마이페이지 추가, 계출 상세 추가  
**[0.10.1]** 문의 실시간 처리 추가, 문의 관리자용 AG용 구분 수정  
==================== 7 week ====================  
**[0.10.0]** 문의 목록 추가, 문의 모달(상세) 추가  
**[0.9.3]** 헤더 수정, 불필요 파일 삭제  
**[0.9.2]** 정산처리(재정산)  
**[0.9.1]** 통합엑셀 등록/수정/인식 추가, 원장 목록 표출 수정(상단 합계 금액 포함), 권한 별 목록 접근 및 URL 통제 추가  
==================== 6 week ====================  
**[0.9.0]** 정산 대시보드 추가, 통합원장 양식 다운로드 추가, 원장목록(관리자) 함계 금액 수정  
**[0.8.2]** 원장 excel 설정 수정 기능 추가, 비밀번호 변경 모달 추가  
**[0.8.1]** 계출 계산처리  
==================== 5 week ====================  
**[0.8.0]** 이메일 발송 기능 추가, 회원가입 화면 추가  
**[0.7.0]** 로그인 화면, 임시비밀번호 발송 추가, 차단 기능 수정  
**[0.6.13]** 관리자 승인 완료시 계출테이블에 ag사id 업데이트  
**[0.6.12]** 계출 fee수정/등록(추가fee는 수식이 없어서 제외)  
**[0.6.11]** 금융사 원장 승인요청/승인, 딜러사 선택, 기타사항 추가/수정 추가  
==================== 4 week ====================  
**[0.6.10]** 금융사 원장 합계 표시 추가  
**[0.6.9]** 원장 목록 excel 자동화 수정  
**[0.6.8]** 사용자 상세, 수정 추가  
**[0.6.7]** 원장 목록 필터 추가  
**[0.6.6]** 계출 수정, 상세 목록 api 추가  
**[0.6.5]** 계정 생성 모달 처리  
**[0.6.4]** 다중 승인 처리, 중복 승인건 처리  
**[0.6.3]** 사용자 목록 jsp, 원장 excel jsp(ing), 원장 목록 jsp(ing)  
==================== 3 week ====================  
**[0.6.2]** 문의 api 추가  
**[0.6.1]** 사용자 목록 jsp 추가(ing)  
**[0.6.0]** code view 추가, 원장 view 추가, ag용 원장 목록 추가(페이징x)  
**[0.5.0]** ID 차단 util 추가, 계정 목록 화면 back-end 추가, 권한 수정  
==================== 2 week ====================  
**[0.4.0]** 코드 관리 api 추가, 문의VO 추가  
**[0.3.0]** 계정 관리 api 추가, 통합 엑셀 처리 추가, IP 차단 util 추가  
==================== 1 week ====================  
**[0.2.7]** 통합 원장 엑셀 properties 추가  
**[0.2.6]** 원장 수정, 상세, 목록 service 추가  
**[0.2.5]** 관리자 승인시 계출 등록  
**[0.2.4]** 원장 excel 자동화 util 추가  
**[0.2.3]** 계출 관련 파일 추가  
**[0.2.2]** 원장 승인 요청 및 승인확인 api 추가  
**[0.2.1]** 원장 등록 api 추가  
**[0.2.0]** 엑셀 양식 체크 util  
**[0.1.0]** 로그인, 계정관리, 권한 util, file util, 원장 excel 설정 관리 추가  
**[0.0.1]** 프로젝트 생성  

## Version 관리 role
**X.Y.Z (etc.현재일자)**
- **X**
  - Major version number
  - 1부터 시작하는 정수 (정식 배포 deploy)
  - 아키텍처 변경 시 1씩 증가
    
- **Y**
  - Minor version number
  - 0부터 시작하는 정수
  - 신규 기능 추가 시 1씩 증가 ( 직접적인 신규 class 추가 시 1씩 증가 )
  - major number가 1증가할 때 0으로 초기화됨
    
- **Z**
  - revision number
  - 0부터 시작하는 정수
  - 기존 기능 수정 시 1씩 증가 ( 기존 class의 수정 및 html 구조 변경 )
  - Minor version number 1증가할 때 0으로 초기화됨
    
- **etc.현재일자**
  - 특정 구분자로 활용
  - 예) 1.1.1.20200827
    
- **branch**
  - 모든 브랜치는 개발자간 협의에 진행
  - 브랜치 최소화 (담당 파트 분리 진행)
