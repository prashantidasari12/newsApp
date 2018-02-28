app.controller("homeCtrl",function($scope,getTopHeadlines){
    getTopHeadlines.getNews().then(function(response){
        $scope.getHeadlines = response.data.articles;
        console.log(response.data.articles);
    });
});

app.service("getTopHeadlines",function($http){
    this.getNews = function(newsData){
       return $http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7229d23a62614dbca5a233d294b55dc8");
    };
});

