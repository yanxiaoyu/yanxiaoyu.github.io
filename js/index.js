var vm = avalon.define({
	$id:"info",
	list:[],
	getInfo:function(){
		$.get("../data/json_1.json",function(ret){
			vm.list = ret;
			console.log(vm.list);
			console.log(ret);
		});
	}
});

$(function(){
	vm.getInfo();
});