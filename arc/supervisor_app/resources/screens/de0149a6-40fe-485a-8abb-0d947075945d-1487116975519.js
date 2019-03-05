jQuery("#simulation")
  .on("click", ".s-de0149a6-40fe-485a-8abb-0d947075945d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_1",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Panel_3",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_9": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "3px 3px 3px 3px",
                        "opacity": "0.05"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_9": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=5)",
                        "filter": "alpha(opacity=5)"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=5)",
                        "filter": "alpha(opacity=5)"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_10"
                  },
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_9": {
                      "attributes": {
                        "background-color": "#292929",
                        "background-image": "none",
                        "border-top-width": "4px",
                        "border-top-style": "solid",
                        "border-top-color": "#06A6D8",
                        "border-right-width": "4px",
                        "border-right-style": "solid",
                        "border-right-color": "#06A6D8",
                        "border-bottom-width": "4px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#06A6D8",
                        "border-left-width": "4px",
                        "border-left-style": "solid",
                        "border-left-color": "#06A6D8",
                        "border-radius": "3px 3px 3px 3px",
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_9": {
                      "attributes-ie": {
                        "border-top-width": "4px",
                        "border-top-style": "solid",
                        "border-top-color": "#06A6D8",
                        "border-right-width": "4px",
                        "border-right-style": "solid",
                        "border-right-color": "#06A6D8",
                        "border-bottom-width": "4px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#06A6D8",
                        "border-left-width": "4px",
                        "border-left-style": "solid",
                        "border-left-color": "#06A6D8",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#292929",
                        "-pie-poll": "false",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_9": {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_10"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Triangle_3",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#06A6D8",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#06A6D8",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#06A6D8",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#06A6D8",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#06A6D8",
                        "border-radius": "3px 3px 3px 3px",
                        "opacity": "1.0",
                        "box-shadow": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#06A6D8",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#06A6D8",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#06A6D8",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#06A6D8",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#06A6D8",
                        "-pie-poll": "false",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3": {
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_18": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_18 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Triangle_3"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_10"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Triangle_3",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "3px 3px 3px 3px",
                        "opacity": "0.05",
                        "box-shadow": "2px 2px 8px 0px #666666",
                        "text-shadow": "none",
                        "line-height": "17px",
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#D9D9D9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=5)",
                        "filter": "alpha(opacity=5)"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Rectangle_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=5)",
                        "filter": "alpha(opacity=5)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_18": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_18 span": {
                      "attributes": {
                        "color": "#D9D9D9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Triangle_3"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_10"
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Input_17 input": {
                      "attributes": {
                        "color": "#F3F3F3",
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/de0149a6-40fe-485a-8abb-0d947075945d"
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
    } else if(jFirer.is("#s-Text_8")) {
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
                      "duration": 200
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
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_12"
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
    } else if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
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
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd626c0b-d4c9-40c7-9205-49120611f7cf"
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
    } else if(jFirer.is("#s-Text_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 span": {
                      "attributes": {
                        "color": "#CCCCCC",
                        "text-align": "left",
                        "text-decoration": "underline",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 span": {
                      "attributes": {
                        "color": "#666666",
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 span": {
                      "attributes": {
                        "color": "#CCCCCC",
                        "text-align": "left",
                        "text-decoration": "underline",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 span": {
                      "attributes": {
                        "color": "#666666",
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_84")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_11"
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
    } else if(jFirer.is("#s-Text_88")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_12"
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
    } else if(jFirer.is("#s-Label_290")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Text_7",
                  "property": "jimGetValue"
                },"YESTERDAY" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": "TODAY"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Label_290": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Label_290 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Label_290 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Text_7",
                  "property": "jimGetValue"
                },"03-MAR-2016" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": "YESTERDAY"
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
    } else if(jFirer.is("#s-Label_291")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Text_7",
                  "property": "jimGetValue"
                },"TODAY" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": "YESTERDAY"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Label_290": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Label_290 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Label_290 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Text_7",
                  "property": "jimGetValue"
                },"YESTERDAY" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": "03-MAR-2016"
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
  .on("mouseenter dragenter", ".s-de0149a6-40fe-485a-8abb-0d947075945d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_8": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_8 span": {
                      "attributes": {
                        "color": "#CCCCCC",
                        "text-align": "left",
                        "text-decoration": "underline",
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
    } else if(jFirer.is("#s-Text_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_6": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_6 span": {
                      "attributes": {
                        "color": "#F3F3F3",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_4"
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
    } else if(jFirer.is("#s-Text_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_1": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_1 span": {
                      "attributes": {
                        "color": "#F3F3F3",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_6"
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
    } else if(jFirer.is("#s-Text_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_2 span": {
                      "attributes": {
                        "color": "#F3F3F3",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_7"
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 span": {
                      "attributes": {
                        "color": "#CCCCCC",
                        "text-align": "left",
                        "text-decoration": "underline",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 span": {
                      "attributes": {
                        "color": "#666666",
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
          "exectype": "parallel",
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_11 span": {
                      "attributes": {
                        "color": "#CCCCCC",
                        "text-align": "left",
                        "text-decoration": "underline",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_10 span": {
                      "attributes": {
                        "color": "#666666",
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
                    "target": "#s-Group_14"
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
                    "target": "#s-Group_13"
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
                    "target": "#s-Group_15"
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
                    "target": "#s-Group_18"
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
                    "target": "#s-Group_17"
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
                    "target": "#s-Group_19"
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
    } else if(jFirer.is("#s-Text_84") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_84": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_84 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_84 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "underline",
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
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_88": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_88 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-de0149a6-40fe-485a-8abb-0d947075945d #s-Text_88 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "underline",
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
    }
  })
  .on("mouseleave dragleave", ".s-de0149a6-40fe-485a-8abb-0d947075945d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_84")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_88")) {
      jEvent.undoCases(jFirer);
    }
  });