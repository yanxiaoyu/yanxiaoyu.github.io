function getData(){
	$.get("../data/json_1.json",function(ret){
		console.log(ret);
		return ret;
	});
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


