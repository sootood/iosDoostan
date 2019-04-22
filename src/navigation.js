import {
  Navigation
} from 'react-native-navigation'

export const goMainPage = () =>
  // Navigation.setRoot({
  //   root: {
  //     bottomTabs: {
  //       id: 'App',
  //       children: [{
  //         stack: {
  //           children: [
  //             {
  //             component: {
  //               name: 'Home',
  //               options: {
  //                 bottomTab: {
  //                   text: 'Home',
  //                   icon: require('./image/up.png'),
  //                 }
  //               }
  //             },
  //           },
  //           {
  //             component: {
  //               name: 'Search',
  //               options: {
  //                 bottomTab: {
  //                   text: 'Search',
  //                   icon: require('./image/in.png'),
  //                 }
  //               }
  //             },
  //           },
  //           }],
  //         },
  //       }],
  //     }
  //   }
  // });

Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
          name: 'Screen2',
          }
        },
        center:{
        bottomTabs: {
            children: [{
                    stack: {
                        id:'App',
                        children: [{
                            component: {
                                name: 'Home',
                                passProps: {
                                    text: 'Home'
                                }
                            }
                        }],
                        options: {
                          topBar:{
                            title: {
                              text: 'Home'
                            },
                            background:{
                              color:'blue'
                            },
                            leftButtons: [{
                              id: 'buttonOne',
                              icon: require('./image/in.png'),
                            }, ],
                          },
                            bottomTab: {
                                text: 'Home',
                                fontSize: 12,
                                icon: require('./image/in.png'),

                            },
                            
                        }
                    }
                },
                {
                    component: {
                        name: 'Search',
                        passProps: {
                            text: 'Search'
                        },
                        options: {
                          topBar:{
                            title: {
                              text: 'Search'
                            },
                          },
                            bottomTab: {
                                text: 'Search',
                                fontSize: 12,
                                icon: require('./image/in.png')
                            }
                        }
                    }
                }
            ]
        }
      }
    }
  }
}
);


export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [{
        component: {
          name: 'Home',
          
        }
      }],
    }
  }
});
export const goSignUp = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'SignUp',
      children: [{
        component: {
          name: 'SignUp',
          
        }
      }],
    }
  }
});