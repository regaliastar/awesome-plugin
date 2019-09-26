// 地址：https://detail.damai.cn/*

(function(){
	let hd = document.getElementsByClassName('perform')[0]
	if(!hd){
		hd = document.getElementsByClassName('g-bd')[0]
	}
	const newNode = document.createElement("LI")
	newNode.appendChild(document.createTextNode('大麦抢票正在运行...'))
	hd.insertBefore(newNode, hd.childNodes[0])
	// 开始抢票时间 11时
	const slow_start = Math.round(new Date(2019,8,30,10,55,0).getTime())	//提前五分钟执行任务 单位ms
	const start = Math.round(new Date(2019,8,30,11,0,0).getTime())
	let now = new Date().getTime()
	let dist = 0
	var timer = setInterval(function(){
		now = new Date().getTime()
		dist = (start - now)/1000
		if(dist > 0){
			console.log("距离开始时间还有: "+dist+"s")
		}
		// 官方时间可能不准确，因此设置slow_start提前启动
		if(now > slow_start){
			try{
				//价位第n档—— 0 1 2 3
				let price = document.getElementsByClassName("select_right_list_item sku_item")[2]
				if(price){
					price.click()
				}
				// document.getElementsByClassName("select_right_list_item sku_item")[2].click()

				//张数+1
				let number = document.getElementsByClassName("cafe-c-input-number-handler cafe-c-input-number-handler-up")[0]
				if(number){
					number.click()
				}
				// document.getElementsByClassName("cafe-c-input-number-handler cafe-c-input-number-handler-up")[0].click()

				// 购买按钮
				let buyBtn = document.getElementsByClassName("buybtn")[0]
				if(buyBtn){
					buyBtn.click()
					exit()
				}
				// document.getElementsByClassName("buybtn")[0].click()
			}catch(err){
				console.log(err)
			}	
			
		}
	}, 100)

	function exit(){
		clearInterval(timer)
	}

})()