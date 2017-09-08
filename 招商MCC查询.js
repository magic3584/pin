
$ui.render({
	props: {
		title: "招商MCC查询"
	},
	views: [
		{
			type: "input",
			props: {
				id: "input",
				type: $kbType.decimal,
				placeholder: "请输入签购单第8-11位"
			},
			layout: function(make) {
				make.left.equalTo(10)
				make.top.equalTo(10)
				make.height.equalTo(30)
			},
		},
		{
			type: "button",
			props: {
				title: "搜索"
			},
			layout: function(make) {
				make.top.equalTo(10)
				make.right.equalTo(-10)
				make.width.equalTo(100)
				make.height.equalTo(30)
				make.left.equalTo($("input").right).offset(10)
			},
			events: {
				tapped: function(sender) {
					search()
				}
			}
		}
	]
})

const dic = {"1520":"房地产汽车类","7013":"房地产汽车类","5271":"房地产汽车类","5511":"房地产汽车类","5521":"房地产汽车类","5551":"房地产汽车类","5561":"房地产汽车类","5571":"房地产汽车类","5592":"房地产汽车类","5598":"房地产汽车类","5599":"房地产汽车类","5933":"房地产汽车类",
"5021":"批发商户类","5039":"批发商户类","5044":"批发商户类","5045":"批发商户类","5046":"批发商户类","5047":"批发商户类","5051":"批发商户类","5065":"批发商户类","5072":"批发商户类","5074":"批发商户类","5111":"批发商户类","5122":"批发商户类","5131":"批发商户类","5137":"批发商户类","5139":"批发商户类","5172":"批发商户类","5192":"批发商户类","5193":"批发商户类","5198":"批发商户类","5998":"批发商户类","5013":"批发商户类","5398":"批发商户类","4458":"批发商户类",
"5541":"加油、超市类","5542":"加油、超市类","5722":"加油、超市类","5411":"加油、超市类",
"4511":"交通运输售票","4111":"交通运输售票","4121":"交通运输售票","4131":"交通运输售票","4784":"交通运输售票","3998":"交通运输售票","4112":"交通运输售票",
"4900":"水电气缴费","4814":"水电气缴费","4899":"水电气缴费","6300":"水电气缴费","5960":"水电气缴费",
"8651":"政府类","9211":"政府类","9222":"政府类","9223":"政府类","9311":"政府类","9399":"政府类","9400":"政府类",
"5994":"便民类","7523":"便民类","9402":"便民类",
"8062":"医院、学校、慈善","8211":"医院、学校、慈善","8220":"医院、学校、慈善","8398":"医院、学校、慈善","8351":"医院、学校、慈善","8049":"医院、学校、慈善","8241":"医院、学校、慈善","8042":"医院、学校、慈善","8099":"医院、学校、慈善","8031":"医院、学校、慈善","8011":"医院、学校、慈善","8021":"医院、学校、慈善","8041":"医院、学校、慈善",
"7299":"其他","8399":"其他","6012":"其他","0763":"其他","9498":"其他","7399":"其他","4816":"其他","7372":"其他"}

function search() {
	var number = $("input").text
	var isValid = true
	var name = ""
	for (var [key, value] of dic) {
		if (key == number) {
			isValid = false,
			name = value,
			break
		}
	}

	if (isValid) {
		$ui.alert("有效编号")
	} else {
		$ui.alert("无效编号：" + number + "\n" + "无效类型：" + name)
	}
}
