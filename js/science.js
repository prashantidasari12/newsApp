app.controller('scienceCtrl',function($scope,getScienceNews){
    getScienceNews.getScience().then(function(response){
        $scope.getScienceHeadlines = response.data.articles;
        console.log(response.data.articles);
    });
});


app.service('getScienceNews',function($http){
    this.getScience = function(scienceNews){
        return $http.get("https://newsapi.org/v2/top-headlines?country=us&category=science&category=science&apiKey=7229d23a62614dbca5a233d294b55dc8");
    };
});