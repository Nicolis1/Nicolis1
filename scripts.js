function init() {
	const resumeEle = document.getElementById('resume');
	resumeEle.onclick = () => {
		window.open('./files/joseph_agnelli_resume.pdf', '_blank').focus();
	};

	const linkedinEle = document.getElementById('linkedin');
	linkedinEle.onclick = () => {
		window
			.open('https://www.linkedin.com/in/joseph-agnelli-b8ba61119/', '_blank')
			.focus();
	};
}
