var vm = avalon.define({
	$id:"info",
	list:[],
	getInfo:function(){
		$.get("../data/json_1.json",function(ret){
			vm.list = ret;
			
			console.log(ret);
		});
	},
	showName:function(){
		console.log(vm.list);
	}
});

$(function(){
	vm.getInfo();
	vm.showName();
});