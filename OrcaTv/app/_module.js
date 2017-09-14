angular.module('orca', [
	'ngResource'
]);

angular.module('orca')
	.factory('Feeds', function ($q, $http, $resource) {
		return {
			get: function () {
				return $http({ method: 'GET', url: '/app/feeds.xml' });
			},
			get2: function () {
				var resource = $resource('http://www.orcatv.net/reader/trial1/php/get-feed-content.php?feedurl=http://www.npr.org/rss/rss.php?id=1001&_=1505429345075');
				return resource.get();
			}
		};
	})

	.controller('home', function ($scope, Feeds) {
		Feeds.get().then(function (result) {
//			$scope.test = result.data;
			$scope.items = xmlToJSON.parseString(result.data).rss[0].channel[0].item;
			debugger;
		});

//		$scope.test = Feeds.get();
//		Feeds.get().then(function(result) {
//			debugger;
//		});
	});

