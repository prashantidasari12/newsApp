app.controller('healthCtrl',function($scope,getHealthNews){
    getHealthNews.getHealth().then(function(response){
        $scope.getHealthHeadlines = response.data.articles;
        console.log(response.data.articles);
    });
});

app.service("getHealthNews",function($http){
    this.getHealth = function(healthNews){
        return $http.get("https://newsapi.org/v2/top-headlines?country=us&category=health&category=technology&apiKey=7229d23a62614dbca5a233d294b55dc8");
    };
});