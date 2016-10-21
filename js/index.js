var vm = avalon.define({
	$id:"info",
	list:[],
	getInfo:function(){
		$.get("../data/json_1.json",function(ret){
			vm.list = ret;
			console.log(vm.list);
			console.log(ret);
		});
	},
	showName:function(){
		alert(11);
	}
});

$(function(){
	vm.showName();
	vm.getInfo();
});