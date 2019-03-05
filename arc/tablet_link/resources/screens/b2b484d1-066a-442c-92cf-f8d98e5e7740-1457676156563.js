jQuery("#simulation")
  .on("click", ".s-b2b484d1-066a-442c-92cf-f8d98e5e7740 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b2b484d1-066a-442c-92cf-f8d98e5e7740 #s-Button_1": {
                      "attributes": {
                        "background-color": "#06A6D8",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b2b484d1-066a-442c-92cf-f8d98e5e7740 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#06A6D8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
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
                    "#s-b2b484d1-066a-442c-92cf-f8d98e5e7740 #s-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b2b484d1-066a-442c-92cf-f8d98e5e7740 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/63d1477b-9d1a-4d3c-bfe8-c01687e43d7c"
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
  .on("drag", ".s-b2b484d1-066a-442c-92cf-f8d98e5e7740 .drag", function(event, data) {
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
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Line_3",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Ellipse_1",
                          "property": "jimGetPositionX"
                        },"50" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_1",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
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
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimDivide",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Line_2",
                    "property": "jimGetWidth"
                  },"5" ]
                },{
                  "datatype": "property",
                  "target": "#s-Ellipse_1",
                  "property": "jimGetPositionX"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_4",
                    "value": "POOR"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimMultiply",
                  "parameter": [ {
                    "action": "jimDivide",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Line_2",
                      "property": "jimGetWidth"
                    },"5" ]
                  },"2" ]
                },{
                  "datatype": "property",
                  "target": "#s-Ellipse_1",
                  "property": "jimGetPositionX"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_4",
                    "value": "BELOW AVERAGE"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimMultiply",
                  "parameter": [ {
                    "action": "jimDivide",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Line_2",
                      "property": "jimGetWidth"
                    },"5" ]
                  },"3" ]
                },{
                  "datatype": "property",
                  "target": "#s-Ellipse_1",
                  "property": "jimGetPositionX"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_4",
                    "value": "AVERAGE"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimMultiply",
                  "parameter": [ {
                    "action": "jimDivide",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Line_2",
                      "property": "jimGetWidth"
                    },"5" ]
                  },"4" ]
                },{
                  "datatype": "property",
                  "target": "#s-Line_3",
                  "property": "jimGetPositionX"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_4",
                    "value": "ABOVE AVERAGE"
                  },
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
                    "target": "#s-Text_4",
                    "value": "FANTASTIC"
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
  .on("dragend", ".s-b2b484d1-066a-442c-92cf-f8d98e5e7740 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-b2b484d1-066a-442c-92cf-f8d98e5e7740 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });