//your JS code here. If required.
let submit = document.getElementById("submit")
let existing = document.getElementById("existing")
let uname = localStorage.getItem("username")
if (uname) {
	existing.innerHTML = "Login as existing user."
}

existing.addEventListener("click", () => {
	alert("Logged in as .")
})

submit.addEventListener("click", () => {
	let username = document.getElementById("username").value
	let password = document.getElementById("password").value
	let checkbox = document.getElementById("checkbox")
	if (checkbox.checked) {
		localStorage.setItem('username', username)
		localStorage.setItem('password', password)
	} else {
		localStorage.removeItem('username')
		localStorage.removeItem('password')	
	}
	alert("Logged in as .")
})
