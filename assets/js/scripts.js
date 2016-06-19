var rootPath = '';

function setRootPath(inputPath){
	rootPath = inputPath;
}

function writeNav(){
	document.write('\
		<header id="header">\
			<h1 id="logo">\
				<a href="' + rootPath + 'index.html"><img class="image nav align-vertical" href="' + rootPath + 'index.html" src="' + rootPath + 'assets/profile2.jpg" alt="" />David Xiao</a>\
			</h1>\
			<nav id="nav">\
				<ul>\
					<li><a href="' + rootPath + 'index.html">Home</a></li>\
					<li><a href="' + rootPath + 'AboutMe.html">About Me</a></li>\
					<li><a href="' + rootPath + 'UCL.html">UCL</a></li>\
					<li>\
						<a href="' + rootPath + 'Projects.html">Projects</a>\
						<ul>\
							<li>\
								<a href="' + rootPath + 'Projects/Android.html">Android</a>\
								<ul>\
									<li><a href="' + rootPath + 'Projects/Android/SimpleSpeedo.html">Simple Speedo</a></li>\
									<li><a href="' + rootPath + 'Projects/Android/SenPoker.html">Sen Poker</a></li>\
									<li><a href="' + rootPath + 'Projects/Android/HeartRateAlarm.html">Heart Rate Alarm</a></li>\
									<li><a href="' + rootPath + 'Projects/Android/WebsiteLauncher.html">Website Launcher</a></li>\
								</ul>\
							</li>\
							<li>\
								<a href="' + rootPath + 'Projects/Windows.html">Windows</a>\
								<ul>\
									<li><a href="' + rootPath + 'Projects/Windows/TouchWall.html">TouchWall</a></li>\
								</ul>\
							</li>\
							<li>\
								<a href="' + rootPath + 'Projects/WindowsPhone.html">Windows Phone</a>\
								<ul>\
									<li><a href="' + rootPath + 'Projects/WindowsPhone/CitiesUnlocked.html">Cities Unlocked</a></li>\
								</ul>\
							</li>\
							<li>\
								<a href="' + rootPath + 'Projects/TouchDevelop.html">TouchDevelop</a>\
								<ul>\
									<li><a href="' + rootPath + 'Projects/TouchDevelop/BalanceGame.html">Balance Game</a></li>\
									<li><a href="' + rootPath + 'Projects/TouchDevelop/EngduinoBluetooth.html">Engduino Bluetooth</a></li>\
								</ul>\
							</li>\
							<li>\
								<a href="' + rootPath + 'Projects/Python.html">Python</a>\
								<ul>\
									<li><a href="' + rootPath + 'Projects/Python/RoboSim.html">RoboSim</a></li>\
								</ul>\
							</li>\
							<li>\
								<a href="' + rootPath + 'Projects/Hardware.html">Hardware</a>\
								<ul>\
									<li><a href="' + rootPath + 'Projects/Hardware/WOLanywhere.html">Wake On LAN Anywhere</a></li>\
									<li><a href="' + rootPath + 'Projects/Hardware/DSPFiltering.html">DSP Filtering</a></li>\
									<li><a href="' + rootPath + 'Projects/Hardware/CitiesUnlockedPCB.html">Cities Unlocked PCB</a></li>\
									<li><a href="' + rootPath + 'Projects/Hardware/BioReactor.html">BioReactor</a></li>\
								</ul>\
							</li>\
						</ul>\
					</li>\
					<li><a href="' + rootPath + 'GoogleInternship.html">Google Internship</a></li>\
				</ul>\
			</nav>\
		</header>\
	');
}

function writeFooter() {
	document.write('\
		<footer id="footer" style="padding:0.5em 0 0.5em 0;">\
			<ul class="icons">\
				<li><a href="https://www.facebook.com/davidxiao93" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>\
				<li><a href="https://uk.linkedin.com/in/davidxiao93" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li>\
				<li><a href="https://github.com/davidxiao93" class="icon alt fa-github"><span class="label">GitHub</span></a></li>\
				<li><a href="mailto:davidxiao93@gmail.com?Subject=xiao93.com" target="_top" class="icon alt fa-envelope"><span class="label">Email</span></a></li>\
			</ul>\
			<ul class="copyright">\
				<li>&copy; 2015-2016 David Xiao. All rights reserved.</li>\
			</ul>\
			<ul class="copyright">\
				<li>Undergraduate Computer Scientist, University College London</li>\
			</ul>\
		</footer>\
	');
}

function writeScripts() {
	document.write('\
			<script type="text/javascript" src="' + rootPath + 'assets/js/jquery.min.js"></script>\
			<script type="text/javascript" src="' + rootPath + 'assets/js/jquery.scrolly.min.js"></script>\
			<script type="text/javascript" src="' + rootPath + 'assets/js/jquery.dropotron.min.js"></script>\
			<script type="text/javascript" src="' + rootPath + 'assets/js/jquery.scrollex.min.js"></script>\
			<script type="text/javascript" src="' + rootPath + 'assets/js/skel.min.js"></script>\
			<script type="text/javascript" src="' + rootPath + 'assets/js/util.js"></script>\
			<!--[if lte IE 8]><script type="text/javascript" src="' + rootPath + 'assets/js/ie/respond.min.js"></script><![endif]-->\
			<script type="text/javascript" src="' + rootPath + 'assets/js/main.js"></script>\
			<script type="text/javascript"> $(".dsOnly").one("click", expandImage);	</script>\
			<script type="text/javascript"> window.onload = init; </script>\
	');
}

function expandImage() {
	$(this).one("click", shrinkImage);
	$(this).stop();
    $(this).animate({width: document.body.clientWidth>(this).naturalWidth? (this).naturalWidth + "px" : document.body.clientWidth + "px"}, 300);
}
function shrinkImage() {
	$(this).one("click", expandImage);
	$(this).stop();
    $(this).animate({width: "240px"}, 300);
}

function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i=0; i<imgDefer.length; i++) {
		if(imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
		} 
	} 
	var vidDefer = document.getElementsByTagName('iframe');
	for (var i=0; i<vidDefer.length; i++) {
		if(vidDefer[i].getAttribute('data-src')) {
			vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
		} 
	} 

}