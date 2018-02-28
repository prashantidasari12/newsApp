
describe('apiServicesTesting',function(){
    var $httpBackend;
    var $scope = {};

    beforeEach(inject(function(_$httpBackend_){
        $httpBackend = _$httpBackend_;
    }));


it('should demonstrate using when (200 status)',inject(function($http){
    $httpBackend 
        .when('GET','https://newsapi.org/v2/top-headlines?country=us&apiKey=7229d23a62614dbca5a233d294b55dc8')
        .respond({status:200});

    $httpBackend.flush();
    expect($scope.getHeadlines).toEqual({status:200});
 }));

});