function textcheck() {
	if (document.getElementById('username').value == '') {
		alert("用户名为空！");
		return 0;
	} else if (document.getElementById('text').value == '') {
		alert("留言为空！");
	}
}