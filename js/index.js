var vm = new Vue({
	el:"index",
	data:{
		col_1:this.getData(),
	},
	methods:{
		getData:function(){
			$.get("../data/json_1.json",function(ret){
				console.log(ret);
				return ret;
			});
		}
	}
});

$(function(){
	//vm.getData();
});