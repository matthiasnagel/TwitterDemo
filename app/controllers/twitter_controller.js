// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: TwitterClient
// Controller: twitter_controller
// ==========================================================================

TwitterClient.twitter_controller = M.Controller.extend({

    results: null,

    userResults: null,

    searchString: null,

    username: null,

    search: function() {

        var searchString = M.ViewManager.getView('searchPage', 'searchField').value;
        if(!searchString) {
            M.DialogView.alert({
                title: 'Error',
                message: 'Please enter a search string!'
            });
            return;
        }

        M.LoaderView.show('looking for \'' + searchString + '\'');

        TwitterClient.twitter_model.find({
            urlParams: {
                query: 'q=' + searchString,
                rpp: 10
            },
            callbacks: {
                success: {
                    action: function(records) {
                        M.LoaderView.hide();
                        if(records && records.length === 0) {
                           M.DialogView.alert({
                               title: 'Nothing found...',
                               message: 'Your search for \'' + searchString + '\' didn\'t bring up any results. Please try something else.'
                           });
                        } else {
                            TwitterClient.twitter_controller.set('results', records);

                            TwitterClient.twitter_controller.set('searchString', 'Results for \'' + searchString + '\'');
                            M.Controller.switchToPage(M.ViewManager.getPage('resultPage'));
                        }
                    }
                },
                error: {
                    action: function(request, error) {
                        M.LoaderView.hide();
                        console.log(request+error);
                        M.DialogView.alert({
                            title: 'Request failed',
                            message: 'The search could not be performed! Please check your network status, enter a valid search string and try again.'
                        });
                    }
                }
            }
        });
    }

});
