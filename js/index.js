var vm = new Vue({
	el:"index",
	data:{},
	methods:{
		getData:function(){
			$.get("../data/json_1.json",function(ret){
				console.log(ret);
			});
		}
	}
});

$(function(){
	vm.getData();
});