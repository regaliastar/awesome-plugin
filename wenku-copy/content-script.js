// 地址：https://wenku.baidu.com/view/*

(function(){
	const pageNumber = document.getElementsByClassName('reader-txt-layer').length
	let str = ''
	for(let i = 0; i < pageNumber; i++){
		let coreNode = document.getElementsByClassName('reader-txt-layer')[i].childNodes[0]
		let nodeArr = []
		let length = coreNode.childNodes.length
		for(let j = 0; j < length; j++){
			nodeArr.push(coreNode.childNodes[j].innerText)
		}
		str += nodeArr.join('')
	}

	return str
})()
