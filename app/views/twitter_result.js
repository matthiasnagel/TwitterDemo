// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: TwitterClient
// View: twitter_result
// ==========================================================================



m_require('app/views/twitter_result_listItemTemplateView.js');

TwitterClient.twitter_result = M.PageView.design({


     childViews: 'header content',

            header: M.ToolbarView.design({
                value: 'Twitter Demo',
                contentBinding: {
                    target: TwitterClient.twitter_controller,
                    property: 'searchString'
                },
                anchorLocation : M.TOP,
                showBackButton: YES
            }),

            content: M.ScrollView.design({
                childViews: 'list1',

                list1: M.ListView.design({
                    contentBinding: {
                        target: TwitterClient.twitter_controller,
                        property: 'results'
                    },
                    listItemTemplateView: TwitterClient.twitter_result_listItemTemplateView,
                    removeItemsOnUpdate: YES
                })
            })

});

