app.controller('techCtrl',function($scope,getTechNews){
    getTechNews.getTech().then(function(response){
        $scope.getTechNewsHeadlines = response.data.articles;
        console.log(response.data.articles);
    });
});

app.service('getTechNews',function($http){
    this.getTech = function(techNews){
        return $http.get("https://newsapi.org/v2/top-headlines?country=us&category=technology&category=technology&apiKey=7229d23a62614dbca5a233d294b55dc8");
    };
});