jQuery("#simulation")
  .on("click", ".s-05cf4932-d26d-4168-bfc6-7cab750699d1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_7 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_7 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/06cf939b-9079-4e51-b111-81db3761ba53",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_9": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_9 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_9": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_9 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/05cf4932-d26d-4168-bfc6-7cab750699d1",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_10": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_10 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_10": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_10 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-menu",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-250"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-menu",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-250"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-menuclose"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_11": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_11 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_11": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_11 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4868d6e5-4868-4b52-a046-d98b4586cb40",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_12": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_12 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rectangle_16": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_12": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Label_12 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4868d6e5-4868-4b52-a046-d98b4586cb40",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_233")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_234")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_233": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_234": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_237")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_253")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_237": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_253": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_235")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_235": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_236")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_236": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_254")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_255")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_254": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_255": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_256")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_257")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_256": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_257": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_238")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_239")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_238": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_239": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_240")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_258")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_240": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_258": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_241")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_241": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_242")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_242": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_259")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_260")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_259": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_260": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_261")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_262")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_261": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_262": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_266")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_267")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_266": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_267": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_264")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_265")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_264": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_265": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_246")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_246": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_247")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_247": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_245")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_263")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_245": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_263": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_243")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_244")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes-ie": {
                        "-pie-background": "#41ABDF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_243": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Rich_text_244": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eddeb20-8a16-4e90-92e5-2e739252f2f4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a179f22b-e48b-4274-8b8b-9d82d023e883",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-menu",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-content",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "250"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-menuclose"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-menuclose")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-menuclose"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-menu",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-250"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-content",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-05cf4932-d26d-4168-bfc6-7cab750699d1 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_1",
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Line_2",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Ellipse_1",
                          "property": "jimGetAbsolutePositionX"
                        },"8" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Ellipse_1",
                  "property": "jimGetPositionX"
                },"96" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Ellipse_1",
                  "property": "jimGetPositionX"
                },"131" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Ellipse_1",
                  "property": "jimGetPositionX"
                },"166" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1": {
                      "attributes": {
                        "font-size": "16.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "16.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Ellipse_1",
                  "property": "jimGetPositionX"
                },"201" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_1 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "20.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_2",
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Line_4",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Ellipse_2",
                          "property": "jimGetAbsolutePositionX"
                        },"5" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Ellipse_2",
                  "property": "jimGetPositionX"
                },"67" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_7 span": {
                      "attributes": {
                        "color": "#CCCCCC",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Ellipse_2",
                  "property": "jimGetPositionX"
                },"149" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-05cf4932-d26d-4168-bfc6-7cab750699d1 #s-Text_7 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-05cf4932-d26d-4168-bfc6-7cab750699d1 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-05cf4932-d26d-4168-bfc6-7cab750699d1 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-05cf4932-d26d-4168-bfc6-7cab750699d1 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Scroll position",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Panel_39",
                      "property": "jimGetPositionY"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_99")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_99",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("windowscroll", ".s-05cf4932-d26d-4168-bfc6-7cab750699d1 .windowscroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Scroll position",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Scroll position"
                      },{
                        "action": "jimWindowScrollY"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });