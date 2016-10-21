function getData(){
	var mydata;
	$.get("../data/json_1.json",function(ret){
		console.log(ret);
		mydata = ret;
		console.log(mydata);
	});
	console.log(mydata);
	return mydata;
}
var col_1_data = getData();
console.log(col_1_data);
var vm = new Vue({
	el:"#info",
	data:{
		col_1:col_1_data,
		msg:"我是小鱼"
	},
	methods:{
		
	}
});


