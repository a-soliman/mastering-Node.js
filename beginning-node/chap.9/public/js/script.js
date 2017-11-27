let demoApp = angular.module('demo', []);

demoApp.controller('MainController', ['$scope', 'todoWebService', function($scope, todoWebService) {
	let vm = {};

	vm.list = [];

	// inital load of li9sts
	todoWebService.getItems().then(function(response) {
		vm.list = response.data.items;
	});

	// Ad Item
	vm.addItem = function() {
		
		let item = {
			details: vm.newItemDetails
		};

		vm.newItemDetails = '';

		//send the requist to the server
		todoWebService.addItem(item).then(function(response) {
			vm.list.push({
				_id: response.data.itemId,
				details: item.details
			});
		});
	};

	// Remove Item
	vm.removeItem = function(itemToRemove) {
		// TODO: Remove from the server then,

		vm.list = vm.list.filter(function(item) { return item._id !== itemToRemove._id; });
		todoWebService.removeItem(itemToRemove);
	};

	// For new items
	vm.newItemDetails = '';

	// Expose vm using the scope
	$scope.vm = vm;

}]);

demoApp.service('todoWebService', ['$http', function ($http) {
	let root = '/todo';
	return {
		getItems: function() {
			return $http.get(root);
		},
		addItem: function(item) {
			return $http.post(root, item);
		},
		removeItem: function(item) {
			return $http.delete(root + '/' + item._id)
		}
	}
}]);