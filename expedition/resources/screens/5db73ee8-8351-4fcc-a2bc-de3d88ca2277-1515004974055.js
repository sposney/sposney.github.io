jQuery("#simulation")
  .on("click", ".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/37fce076-ba9c-49f7-a4cb-68af508ae98c",
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
                    "value": ""
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Input_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Input_1 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Minion Pro,Arial",
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
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_4",
                    "top": {
                      "type": "movetoposition",
                      "value": "97"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "109"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
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
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "top": {
                      "type": "movetoposition",
                      "value": "97"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-266"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "330"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
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
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "220"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
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
    } else if(jFirer.is("#s-Text_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "440"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
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
    } else if(jFirer.is("#s-Text_67")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "110"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6"
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
    } else if(jFirer.is("#s-Text_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "top": {
                      "type": "movetoposition",
                      "value": "97"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_4",
                    "top": {
                      "type": "movetoposition",
                      "value": "97"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "375"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_77")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_4",
                    "top": {
                      "type": "movetoposition",
                      "value": "97"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "375"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "top": {
                      "type": "movetoposition",
                      "value": "97"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
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
    }
  })
  .on("pageload", ".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx"
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
  .on("swipeleft", ".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "110"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6",
                    "transition": "slideleft"
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
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "330"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4",
                    "transition": "slideleft"
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
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "440"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5",
                    "transition": "slideleft"
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
    } else if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "220"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "slideleft"
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
  .on("swiperight", ".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "110"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6",
                    "transition": "slideright"
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
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "220"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "slideright"
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
    } else if(jFirer.is("#s-Panel_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "330"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4",
                    "transition": "slideright"
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
    } else if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_67 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_21 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_22 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_19 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Cinzel-Bold,Arial"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Text_20 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Cinzel-Bold,Arial",
                        "font-size": "12.0pt"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "7"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Group_2",
                    "axis": "scrollx",
                    "effect": {
                      "type": "none",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "transition": "slideright"
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
  });