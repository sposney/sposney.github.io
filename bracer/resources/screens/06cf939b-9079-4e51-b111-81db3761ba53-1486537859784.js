jQuery("#simulation")
  .on("click", ".s-06cf939b-9079-4e51-b111-81db3761ba53 .click", function(event, data) {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_7 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_8": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_7 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_9": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_9 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_11": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_9": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_9 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_10": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_10 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_12": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_10": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_10 span": {
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7772ad9-85d3-4702-b31c-376261f9ca31",
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
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_11": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_11 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_14": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_11": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_11 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16": {
                      "attributes": {
                        "background-color": "#41ABDF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_12": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_12 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Rectangle_16": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_12": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Label_12 span": {
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
    } else if(jFirer.is("#s-menuicon")) {
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
    } else if(jFirer.is("#s-home")) {
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
    } else if(jFirer.is("#s-foreground_circle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-start_symbol",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-foreground_circle .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "160px",
                        "height": "160px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-foreground_circle .content": {
                      "attributes": {
                        "width": "160px",
                        "height": "160px"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-foreground_circle": {
                      "attributes": {
                        "border-top-width": "7px",
                        "border-top-style": "solid",
                        "border-top-color": "#F39482",
                        "border-right-width": "7px",
                        "border-right-style": "solid",
                        "border-right-color": "#F39482",
                        "border-bottom-width": "7px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F39482",
                        "border-left-width": "7px",
                        "border-left-style": "solid",
                        "border-left-color": "#F39482",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-foreground_circle": {
                      "attributes-ie": {
                        "border-top-width": "7px",
                        "border-top-style": "solid",
                        "border-top-color": "#F39482",
                        "border-right-width": "7px",
                        "border-right-style": "solid",
                        "border-right-color": "#F39482",
                        "border-bottom-width": "7px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F39482",
                        "border-left-width": "7px",
                        "border-left-style": "solid",
                        "border-left-color": "#F39482",
                        "border-radius": "0px 0px 0px 0px"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-real_words",
                    "value": "Tap to end recording & view analysis"
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
                    "target": "#s-recording_symbol",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
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
                    "target": "#s-stop_circle"
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
    } else if(jFirer.is("#s-stop_circle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-combopicker",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-start_button",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
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
                    "target": "#s-processing"
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
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
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
                    "target": "screens/ed16d32b-9482-4648-b3f4-17964ef90a3f",
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-06cf939b-9079-4e51-b111-81db3761ba53 .drag", function(event, data) {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1": {
                      "attributes": {
                        "font-size": "16.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "Helvetica Neue,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "bottom",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_1 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_7 span": {
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
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-Text_7 span": {
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
  .on("dragend", ".s-06cf939b-9079-4e51-b111-81db3761ba53 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-06cf939b-9079-4e51-b111-81db3761ba53 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-06cf939b-9079-4e51-b111-81db3761ba53 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_99")) {
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
  .on("change", ".s-06cf939b-9079-4e51-b111-81db3761ba53 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-picker")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-picker",
                  "property": "jimGetSelectedValue"
                },"Select exercise..." ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-darken_overlay"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-06cf939b-9079-4e51-b111-81db3761ba53 #s-picker": {
                      "attributes": {
                        "color": "#CCCCCC",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Helvetica Neue,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "200",
                        "vertical-align": "middle"
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
    }
  });