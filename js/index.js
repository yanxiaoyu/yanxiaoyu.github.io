
var vm = new Vue({
	el:"#index",
	data:{
		col_1:col_1_data,
		msg:"我是小鱼"
	},
	methods:{
		getData:function(){
			$.get("../data/json_1.json",function(ret){
				console.log(typeof(ret));
				return ret;
			});
		}
	}
});

var col_1_data = vm.getData();
