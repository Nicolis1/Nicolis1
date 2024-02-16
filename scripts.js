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

	const showResumeEle = document.getElementById('showResume');
	let resumeHidden = true;

	function toggleResume() {
		const resume = document.getElementById('resume');

		if (resumeHidden) {
			showResumeEle.innerHTML = 'Hide Resume';
			resume.style.display = 'block';
		} else {
			showResumeEle.innerHTML = 'Show Resume';
			resume.style.display = 'none';
		}
		resumeHidden = !resumeHidden;
	}
	window.addEventListener('resize', () => {
		if (resumeHidden && window.innerWidth > 799) {
			resume.style.display = 'block';
		} else if (window.innerWidth < 800) {
			// when shrinking the screen sets the visibility to wherever it was before expanding
			if (resumeHidden) {
				showResumeEle.innerHTML = 'Show Resume';
				resume.style.display = 'none';
			} else {
				showResumeEle.innerHTML = 'Hide Resume';
				resume.style.display = 'block';
			}
		}
	});

	showResumeEle.onclick = () => {
		toggleResume();
	};
}
