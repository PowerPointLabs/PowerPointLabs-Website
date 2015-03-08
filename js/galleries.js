var App = {};
App.ViewModels = {};
App.Models = {};

App.Constants = {
	'shapeDirectory': './shapes/'
};

App.Models.Shape = function(rawShape) {
	var relativeLinker = function(resource) {
		return function() {
			return App.Constants.shapeDirectory + resource;
		};
	};

	this.name = ko.observable(rawShape.name);
	this.tags = ko.observableArray(rawShape.tags);
	this.image = ko.computed(relativeLinker(rawShape.image));
	this.description = ko.observable(rawShape.description);
	this.link = ko.computed(relativeLinker(rawShape.link));
	this.licenseTerms = ko.observable(rawShape.licenseTerms);
	this.submitter = ko.observable(rawShape.submitter);
};

App.ViewModels.MainViewModel = function(shapes) {
	var self = this;

	var proccessedShapes = [];
	for (var i = shapes.length - 1; i >= 0; i--) {
		var newShape = new App.Models.Shape(shapes[i]);
		proccessedShapes.push(newShape);
	}

	self.allShapes = proccessedShapes;

	self.filterText = ko.observable("");

	self.shapes = ko.observableArray(proccessedShapes);

	self.isLibrarySectionOpen = ko.observable(false);
	self.isGallerySectionOpen = ko.observable(false);

	self.toggleShapeLibraries = function() {
		$("#shape-libraries").slideToggle();
		self.isLibrarySectionOpen(!self.isLibrarySectionOpen());
	};

	self.toggleShapeGallery = function() {
		$("#shape-gallery").slideToggle();
		self.isGallerySectionOpen(!self.isGallerySectionOpen());
	};

	self.filterShapes = function(filter) {
		if (filter === "") {
			self.shapes(self.allShapes);
			return;
		}

		var loweredFilter = filter.toLowerCase();
		var filtered = [];
		for (var i = self.allShapes.length - 1; i >= 0; i--) {
			var currentShape = self.allShapes[i];

			var loweredName = currentShape.name().toLowerCase();
			var nameContainsFilter = loweredName.indexOf(loweredFilter) !== -1;

			var loweredDescription = currentShape.description().toLowerCase();
			var descriptionContainsFilter = loweredDescription.indexOf(loweredFilter) !== -1;

			var tagsContainFilter = false;
			for (var j = currentShape.tags().length - 1; j >= 0; j--) {
				var loweredTag = currentShape.tags()[j].toLowerCase();

				if (loweredTag.indexOf(filter) !== -1) {
					tagsContainFilter = true;
				}
			};

			if (nameContainsFilter || tagsContainFilter || descriptionContainsFilter) {
				filtered.push(currentShape);
			}
		};

		self.shapes(filtered);
	};

	self.filterText.subscribe(self.filterShapes);
};

$(function() {
	var viewModel = new App.ViewModels.MainViewModel(shapes);
	ko.applyBindings(viewModel);
	$('[data-toggle="tooltip"]').tooltip();
});