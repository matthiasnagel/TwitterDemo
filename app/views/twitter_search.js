// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: TwitterClient
// View: twitter_search
// ==========================================================================

TwitterClient.twitter_search = M.PageView.design({

   childViews: 'header content',

                header: M.ToolbarView.design({
                    value: 'Twitter Demo',
                    anchorLocation : M.TOP
                }),

                content: M.ScrollView.design({

                    childViews: 'searchField button',

                    searchField: M.TextFieldView.design({
                        initialText: 'search term...',
                        cssClassOnInit: 'textfieldInit',
                        isGrouped: NO,
                        events: {
                            enter: {
                                target: TwitterClient.twitter_controller,
                                action: 'search'
                            }
                        }
                    }),

                    button: M.ButtonView.design({
                        value: 'Search',
                        events: {
                            tap: {
                                target: TwitterClient.twitter_controller,
                                action: 'search'
                            }
                        }

                    })


                })

});

