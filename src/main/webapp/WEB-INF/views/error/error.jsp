<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CRM 정산 - ERROR</title>

<style type="text/css">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
    height: 100%;
	overflow: hidden;
	background-image: url(/static/assets/images/common/log-bg.png);
	background-repeat: no-repeat;
}

.container {
	position: relative;
	height: 600px;
}

.cloud {
	position: relative;
	width: 320px;
	height: 100px;
	background: #fff;
	border-radius: 100px;
}

.cloud::before {
	content: '';
	position: absolute;
	top: -50px;
	left: 40px;
	width: 110px;
	height: 110px;
	background: #fff;
	border-radius: 50%;
	box-shadow: 90px 0 0 30px #fff;
}

.rain {
	position: relative;
	display: flex;
	z-index: 1;
}

.rain span {
	position: relative;
	width: 10px;
	height: 10px;
	background: #fff;
	margin: 0 2px;
	border-radius: 50%;
	animation: animate 5s linear infinite;
	animation-duration: calc(15s / var(--i));
	transform-origin: bottom;
}

@keyframes animate
{
	0% {
		transform: translateY(0) scale(1);
	}
	70% {
		transform: translateY(500px) scale(1);
	}
	100% {
		transform: translateY(500px) scale(0);
	}
}

#error-page{
  position: absolute;
  top: 10%;
  left: 15%;
  right: 15%;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#error-page .content{
  max-width: 600px;
  text-align: center;
}
.content h2.header{
  font-size: 18vw;
  line-height: 1em;
  position: relative;
}
.content h2.header:after{
  position: absolute;
  content: attr(data-text);
  top: 0;
  left: 0;
  right: 0;
  background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
  background-size: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.25);
}
.content h4{
  font-size: 1.5em;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #000;
  font-size: 2em;
  max-width: 600px;
  position: relative;
}
.content h4:after{
  position: absolute;
  content: attr(data-text);
  top: 0;
  left: 0;
  right: 0;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.content p{
  font-size: 1.2em;
  color: #fff;
}
.content .btns{
  margin: 25px 0;
  display: inline-flex;
}
.content .btns a{
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  border: 2px solid #69a6ce;
  color: #69a6ce;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 25px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}
.content .btns a:hover{
  background: #69a6ce;
  color: #fff;
}
</style>
<script type="text/javascript">
	
	document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움
	    // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
	    // pageX, pageY와는 다름.
	    var circle = document.querySelector(".container");
	
	    var mouseX = e.clientX - 950;
	    var mouseY = e.clientY - 200;
	
	    circle.style.left = mouseX + 'px';
	    circle.style.top = mouseY + 'px';
	});
</script>
</head>
<body>
	<div id="error-page">
         <div class="content">
            <h2 class="header" data-text="404">
               404
            </h2>
            <p>
               접속하신 페이지가 존재하지 않습니다.
            </p>
         </div>
      </div>
	<div class="container">
		<div class="cloud"></div>
		<div class="rain">
			<span style="--i:11"></span>
			<span style="--i:12"></span>
			<span style="--i:10"></span>
			<span style="--i:14"></span>
			<span style="--i:18"></span>
			<span style="--i:16"></span>
			<span style="--i:19"></span>
			<span style="--i:20"></span>
			<span style="--i:19"></span>
			<span style="--i:10"></span>
			<span style="--i:16"></span>
			<span style="--i:14"></span>
			<span style="--i:18"></span>
			<span style="--i:11"></span>
			<span style="--i:13"></span>
			<span style="--i:15"></span>
			<span style="--i:12"></span>
			<span style="--i:17"></span>
			<span style="--i:13"></span>
			<span style="--i:15"></span>
			<span style="--i:11"></span>
		</div>
	</div>
</body>
</html>