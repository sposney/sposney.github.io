jQuery("#simulation")
  .on("click", ".s-65293716-2183-4df1-b024-574cfce330d9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-back_button")) {
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
    } else if(jFirer.is("#s-Ellipse_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-lateralmovementgraph",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
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
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes": {
                        "background-color": "#153C3E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes-ie": {
                        "-pie-background": "#153C3E",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-kneeanglegraph",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes": {
                        "background-color": "#153C3E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes-ie": {
                        "-pie-background": "#153C3E",
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
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
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
    }
  })
  .on("pageload", ".s-65293716-2183-4df1-b024-574cfce330d9 .pageload", function(event, data) {
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
  .on("swipeleft", ".s-65293716-2183-4df1-b024-574cfce330d9 .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-kneeanglegraph")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-lateralmovementgraph",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
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
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes": {
                        "background-color": "#232B37",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes-ie": {
                        "-pie-background": "#232B37",
                        "-pie-poll": "false"
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
    }
  })
  .on("swiperight", ".s-65293716-2183-4df1-b024-574cfce330d9 .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-lateralmovementgraph")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-kneeanglegraph",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes": {
                        "background-color": "#153C3E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_1": {
                      "attributes-ie": {
                        "-pie-background": "#153C3E",
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
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-65293716-2183-4df1-b024-574cfce330d9 #s-Ellipse_2": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
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
    }
  });