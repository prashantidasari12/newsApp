app.controller("businessCtrl",function($scope,getBusinessHeadlines){
    getBusinessHeadlines.getBusiness().then(function(response){
        $scope.getBusinessNews = response.data.articles;
        console.log(response.data.articles);
    });
});


app.service("getBusinessHeadlines",function($http){
    this.getBusiness = function(businessNews){
        return $http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7229d23a62614dbca5a233d294b55dc8");
    };
});