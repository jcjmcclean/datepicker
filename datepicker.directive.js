angular
	.module('app')
	.directive('datePicker', datePicker);

datePicker.$inject = [];

function datePicker() {
	var directive = {
		restrict: 'E',
		scope: {
			ngModel: "=",
			placeholder: "@",
			minDate: "=",
			required: "=",
			momentFormat: "@",
			maxView: "@"
		},
		link: link,
		templateUrl: 'views/common/views/_date-picker.html'
	};

	return directive;

	/////

	function link(scope, element, attrs, ctrl, transclude) {
		// Set date format
		if(!scope.momentFormat) {
			scope.momentFormat = 'L';
		}

		// Set placeholder
		if(!scope.placeholder) {
			scope.placeholder = moment().format(scope.momentFormat);
		}
	}
}