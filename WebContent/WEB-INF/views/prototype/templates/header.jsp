<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<h1>css naviagation bar.</h1>
<button	onclick="jquery('div#menu').removeclass().addclass('menu'+' '+'mc_purple');">mc_purple</button>
<button	onclick="jquery('div#menu').removeclass().addclass('menu'+' '+'mc_violet');">mc_violet</button>
<button	onclick="jquery('div#menu').removeclass().addclass('menu'+' '+'mc_orange');">mc_orange</button>
<button	onclick="jquery('div#menu').removeclass().addclass('menu'+' '+'mc_green');">mc_green</button>
<button	onclick="jquery('div#menu').removeclass().addclass('menu'+' '+'mc_gray');">mc_gray</button>
<br />
<br />

<!--class="mc_purple | mc_violet | mc_orange | mc_green | mc_gray"-->
<div id="menu" class="menu mc_purple">
	<div class="inset">
		<div class="major">
			<ul >
				<li class="m1" >
					<a href="#">
						<span>동해물과<span class="i"></span></span>
					</a>
					<div class="sub" >
						<ul sizset="35">
							<li>
								<a href="#">
									<span>동해물과</span>
								</a>
							<li>
								<a href="#">
									<span>동해</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li class="m2">
					<a href="#">
						<span>백두산이<span class="i"></span></span>
					</a>
					<div class="sub">
						<ul sizset="47">
							<li>
								<a href="#">
									<span>백두산이 마르고 닳도록</span>
								</a>
							<li>
								<a href="#">
									<span>백두산</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li class="m3">
					<a href="#"><span>마르고</span></a>
				</li>
				<li class="m4">
					<a href="#">
						<span>닳도록<span class="i"></span></span>
					</a>
					<div class="sub" >
						<ul sizset="62">
							<li>
								<a href="#">
									<span>닳도록</span>
								</a>
							<li>
								<a href="#">
									<span>닳도</span>
								</a>
							<li>
								<a href="#">
									<span>닳</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<div class="aside">
			<ul>
				<li class="m1">
					<a href="#">
						<span>우리나라</span>
					</a>
				</li>
				<li class="m2">
					<a href="#">
						<span>만세</span>
					</a>
					<div class="sub">
						<ul sizset="81">
							<li>
								<a href="#">
									<span>만세</span>
								</a>
							<li>
								<a href="#">
									<span>만만세</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<span class="gradient"> </span>
	</div>
	<span class="shadow"> </span>
</div>
