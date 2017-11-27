let demoApp = angular.module('demo', []);

demoApp.controller('MainController', ['$scope', 'guidService', function($scope, guidService) {
	let vm = {};
	console.log('here')

	vm.list = [
		{ _id: guidService.createGuid(), details: 'Demo First item' },
		{ _id: guidService.createGuid(), details: 'Demo Second Item' }
	];

	// Ad Item
	vm.addItem = function() {
		// TODo send to the server then,

		vm.list.push({
			_id: guidService.createGuid(),
			details: vm.newItemDetails
		});

		vm.newItemDetails = '';
	};

	// Remove Item
	vm.removeItem = function(itemToRemove) {
		// TODO: Remove from the server then,

		vm.list = vm.list.filter(function(item) { return item._id !== itemToRemove._id; });
	};

	// For new items
	vm.newItemDetails = '';

	// Expose vm using the scope
	$scope.vm = vm;

}]);

demoApp.service('guidService', function() {
	return {
		createGuid: function() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				let r = Math.random() *16;
				let o, v = c == 'x' ? r: (r& o*3 | o*8);
				return v.toString(16);
			});
		}
	};
});