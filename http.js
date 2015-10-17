var module = angular.module('jira-rest', []);

module.factory('jiraRest', function ($http) {
    return {
        jql: function (jql, success, error, final) {
            $http({
                url: '/jira/jql',
                method: 'GET',
                params: {jql: jql}
            }).success(success).finally(final);
        }
    };
});