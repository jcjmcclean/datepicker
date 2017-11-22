angular
	.module('datePicker', [])
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
		template: `
			<span
					moment-picker="ngModel"
					locale="en-gb"
					min-view="year"
					max-view="{{ maxView || 'month' }}"
					today="true"
					start-view="year"
					class="moment-picker-input"
					format="{{ momentFormat || 'L' }}"
					autoclose="true"
					min-date="minDate"
			>
				<input
						readonly
						type="text"
						ng-model="ngModel"
						placeholder="{{ placeholder }}"
						ng-required="required"
						ng-model-options="{ updateOn: 'blur' }"
				>
			</span>
		`
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