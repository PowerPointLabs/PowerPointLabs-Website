var App = {};
App.ViewModels = {};
App.Models = {};

App.ViewModels.MainViewModel = function() {
	var self = this;

	self.isLibrarySectionOpen = ko.observable(false);

	self.toggleShapeLibraries = function() {
		$("#shape-libraries").slideToggle();
		self.isLibrarySectionOpen(!self.isLibrarySectionOpen());
	};
};

$(function() {
	var viewModel = new App.ViewModels.MainViewModel();
	ko.applyBindings(viewModel);
});