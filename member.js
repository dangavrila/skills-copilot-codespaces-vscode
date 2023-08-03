function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'views/member.html',
        controller: function() {
            this.skills = skills;
        },
        controllerAs: 'member'
    };
} 