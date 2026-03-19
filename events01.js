const customMap = {
	'chai-red': "background-color:red;",
	'chai-p-2': "padding:2px;",
	'chai-48': "font-size:48px;"
}


console.log(document.querySelectorAll("[class]"))

document.querySelectorAll("[class]").forEach((el) => {
	el.style = customMap[el.className];
	console.log(el.className)
}
)

