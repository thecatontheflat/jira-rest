var module = angular.module('jira-rest', []);

module.factory('jiraRest', function () {
    return {
        jql: function (jql, success, error) {
            AP.require('request', function (request) {
                request({
                    url: '/rest/api/2/search?jql=' + jql + '&fields=description' + '&fields=summary' + '&expand=renderedFields',
                    success: success,
                    error: error
                });
            });
        }
    };
});