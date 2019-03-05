jQuery("#simulation")
  .on("click", ".s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
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
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Input_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Input_1 input": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_1": {
                      "attributes": {
                        "background-color": "#06A6D8",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_1": {
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
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_1": {
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
                    "target": "screens/b2b484d1-066a-442c-92cf-f8d98e5e7740"
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_2": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
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
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cdcdc893-9d8b-4866-a0d7-6fa98cc59fef #s-Button_2": {
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
                    "target": "screens/a9fcc731-f9ab-45a3-90a3-fcaa73a1c535"
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