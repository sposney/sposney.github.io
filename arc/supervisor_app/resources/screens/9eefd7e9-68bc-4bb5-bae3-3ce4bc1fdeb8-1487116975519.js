jQuery("#simulation")
  .on("click", ".s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_65")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8"
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
    } else if(jFirer.is("#s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Input_17 input": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
                    "target": "#s-Input_17",
                    "value": ""
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
    } else if(jFirer.is("#s-Text_75")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ab894edb-4dc0-4fd6-8895-7ca433da18e0"
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
    } else if(jFirer.is("#s-Text_76")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5855c9ba-f9ef-4eea-bbad-f3aab11d626d"
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
    } else if(jFirer.is("#s-Text_87")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_87": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_87 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_87 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Text_125")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_40"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_41"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
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
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Text_126")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_40"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_9"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_41"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Text_127")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_41"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_9"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_40"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  },
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 1000
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_2"
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
    } else if(jFirer.is("#s-Image_76")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
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
  .on("click", ".s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Radio_button_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "datatype": "property",
                  "target": "#s-Radio_button_2",
                  "property": "jimGetValue"
                },
                "actions": [
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Radio_button_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Radio_button_4",
                    "property": "jimGetValue"
                  } ]
                },
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11": {
                        "attributes": {
                          "background-color": "transparent",
                          "background-image": "none",
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#CCCCCC",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "opacity": "1.0",
                          "line-height": "17px",
                          "font-size": "10.0pt",
                          "font-family": "Eurostile,Arial"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11 span": {
                        "attributes": {
                          "color": "#999999",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Eurostile,Arial",
                          "font-size": "10.0pt",
                          "font-style": "normal",
                          "font-weight": "400"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11": {
                        "attributes-ie": {
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#CCCCCC",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "-pie-background": "transparent",
                          "-pie-poll": "false",
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11": {
                        "attributes-ie8lte": {
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_4 > svg": {
                        "attributes": {
                          "overlay": "#999999"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              },
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11": {
                        "attributes": {
                          "background-color": "transparent",
                          "background-image": "none",
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#F3F3F3",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "opacity": "1.0",
                          "line-height": "17px",
                          "font-size": "10.0pt",
                          "font-family": "Eurostile,Arial"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11 span": {
                        "attributes": {
                          "color": "#FFFFFF",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Eurostile,Arial",
                          "font-size": "10.0pt",
                          "font-style": "normal",
                          "font-weight": "400"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11": {
                        "attributes-ie": {
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#F3F3F3",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "-pie-background": "transparent",
                          "-pie-poll": "false",
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_11": {
                        "attributes-ie8lte": {
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_4 > svg": {
                        "attributes": {
                          "overlay": "#F3F3F3"
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Radio_button_6")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "datatype": "property",
                  "target": "#s-Radio_button_6",
                  "property": "jimGetValue"
                },
                "actions": [
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Radio_button_8")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Radio_button_8",
                    "property": "jimGetValue"
                  } ]
                },
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47": {
                        "attributes": {
                          "background-color": "transparent",
                          "background-image": "none",
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#CCCCCC",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "opacity": "1.0",
                          "line-height": "17px",
                          "font-size": "10.0pt",
                          "font-family": "Eurostile,Arial"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47 span": {
                        "attributes": {
                          "color": "#999999",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Eurostile,Arial",
                          "font-size": "10.0pt",
                          "font-style": "normal",
                          "font-weight": "400"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47": {
                        "attributes-ie": {
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#CCCCCC",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "-pie-background": "transparent",
                          "-pie-poll": "false",
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47": {
                        "attributes-ie8lte": {
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_5 > svg": {
                        "attributes": {
                          "overlay": "#999999"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              },
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47": {
                        "attributes": {
                          "background-color": "transparent",
                          "background-image": "none",
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#F3F3F3",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "opacity": "1.0",
                          "line-height": "17px",
                          "font-size": "10.0pt",
                          "font-family": "Eurostile,Arial"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47 span": {
                        "attributes": {
                          "color": "#FFFFFF",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "Eurostile,Arial",
                          "font-size": "10.0pt",
                          "font-style": "normal",
                          "font-weight": "400"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47": {
                        "attributes-ie": {
                          "border-top-width": "0px",
                          "border-top-style": "none",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#F3F3F3",
                          "border-left-width": "0px",
                          "border-left-style": "none",
                          "border-left-color": "#000000",
                          "border-radius": "0px 0px 0px 0px",
                          "-pie-background": "transparent",
                          "-pie-poll": "false",
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    },{
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Rectangle_47": {
                        "attributes-ie8lte": {
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                          "filter": "alpha(opacity=100)"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_5 > svg": {
                        "attributes": {
                          "overlay": "#F3F3F3"
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
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("mouseenter dragenter", ".s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_65") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_65": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_65 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_65 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_66") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_66": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_66 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_66 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_67") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_67 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_68") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_68": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_68 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_68 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_69") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_69": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_69 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_69 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_70") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_70": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_70 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_70 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_71") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_71": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_71 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_71 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_72") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_72": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_72 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_72 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_73") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_73": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_73 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_73 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_74") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_74": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_74 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_74 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_75") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_75": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_75 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_75 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_52"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_76") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_76": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_76 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_76 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_53"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_77") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_77": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_77 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_77 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_55"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_88") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_88": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_88 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_88 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_89") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_89": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_89 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_89 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_90") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_90": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_90 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_90 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_125") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_125 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_10"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_126") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_126 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_42"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_127") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_127 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_43"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_13"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_31"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_38"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_36"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_35"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_34"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_33"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_32"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_9": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_9 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_10": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_10 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_11": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_11 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_75") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_75 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_77") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_77 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_76") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_76 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Line_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Line_22": {
                      "attributes": {
                        "border-top-width": "4px",
                        "border-top-style": "solid",
                        "border-top-color": "#FC0F3B",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Line_22": {
                      "attributes-ie": {
                        "border-top-width": "4px",
                        "border-top-style": "solid",
                        "border-top-color": "#FC0F3B",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Line_22": {
                      "attributes-ie": {
                        "border-top-width": "4px",
                        "border-top-style": "solid",
                        "border-top-color": "#FC0F3B",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_8"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Image_23 > svg": {
                      "attributes": {
                        "overlay": "#666666"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_225") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_225": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_225 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_225 span": {
                      "attributes": {
                        "color": "#99CCFF",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_226") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_226": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_226 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_226 span": {
                      "attributes": {
                        "color": "#99CCFF",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_227") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_227": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_227 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_227 span": {
                      "attributes": {
                        "color": "#99CCFF",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_22": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_22 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_23": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_23 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_25") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_25": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_25 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_26") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_26": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_26 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_27") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_27": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_27 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_27 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_28") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_28": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_28 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_28 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_29") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_29": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_29 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_29 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_30") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_30": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_30 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_30 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_32") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_32": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_32 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_32 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_33") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_33": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_33 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_33 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_34") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_34": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_34 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_34 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_35") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_35": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_35 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_35 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_36") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_36": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_36 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_36 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_44") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_44": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_44 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_44 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_45") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_45": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_45 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_45 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_47") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_47": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_47 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_47 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_48") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_48": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_48 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_48 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_238") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_238": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_238 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_238 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_239") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_239": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_239 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_239 span": {
                      "attributes": {
                        "color": "#99CCFF",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_240") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_240": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_240 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_240 span": {
                      "attributes": {
                        "color": "#99CCFF",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_241") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_241": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_241 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 #s-Text_241 span": {
                      "attributes": {
                        "color": "#99CCFF",
                        "text-align": "right",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_65")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_66")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_67")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_68")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_69")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_70")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_71")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_72")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_73")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_74")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_75")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_76")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_77")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_88")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_89")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_90")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_125")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_126")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_127")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_75")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_77")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_76")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Line_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_225")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_226")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_227")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_34")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_35")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_36")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_44")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_45")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_47")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_48")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_238")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_239")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_240")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_241")) {
      jEvent.undoCases(jFirer);
    }
  });