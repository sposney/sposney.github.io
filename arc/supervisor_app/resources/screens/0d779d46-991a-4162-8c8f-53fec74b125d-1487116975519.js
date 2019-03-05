jQuery("#simulation")
  .on("click", ".s-0d779d46-991a-4162-8c8f-53fec74b125d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Input_17 input": {
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
    } else if(jFirer.is("#s-Text_87")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_87": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_87 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_87 span": {
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1": {
                      "attributes": {
                        "background-color": "#89BFFF",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#89BFFF",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2": {
                      "attributes": {
                        "background-color": "#89BFFF",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#89BFFF",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3": {
                      "attributes": {
                        "background-color": "#89BFFF",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#89BFFF",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
  })
  .on("rightclick", ".s-0d779d46-991a-4162-8c8f-53fec74b125d .rightclick", function(event, data) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
  })
  .on("mouseenter dragenter", ".s-0d779d46-991a-4162-8c8f-53fec74b125d .mouseenter", function(event, data) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_65": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_65 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_65 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_66": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_66 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_66 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_67 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_68": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_68 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_68 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_69": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_69 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_69 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_70": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_70 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_70 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_71": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_71 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_71 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_72": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_72 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_72 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_73": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_73 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_73 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_74": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_74 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_74 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_75": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_75 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_75 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_76": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_76 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_76 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_77": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_77 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_77 span": {
                      "attributes": {
                        "color": "#89BFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_88": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_88 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_88 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_89": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_89 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_89 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_90": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_90 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_90 span": {
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
    } else if(jFirer.is("#s-Text_124") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_124": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_124 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_124 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_22": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_22 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_23": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_23 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_25": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_25 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_26": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_26 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_27": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_27 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_27 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_28": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_28 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_28 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_29": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_29 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_29 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_30": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_30 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_30 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_32": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_32 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_32 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_33": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_33 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_33 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_34": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_34 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_34 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_35": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_35 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_35 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_36": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_36 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_36 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_44": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_44 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_44 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_45": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_45 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_45 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_47": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_47 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_47 span": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_48": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_48 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Text_48 span": {
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
    } else if(jFirer.is("#s-Image_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Image_21 > svg": {
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
    } else if(jFirer.is("#s-Image_32") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Image_32 > svg": {
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
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1": {
                      "attributes": {
                        "background-color": "#89BFFF",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#89BFFF",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
    } else if(jFirer.is("#s-Image_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Image_22 > svg": {
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
    } else if(jFirer.is("#s-Image_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Image_19 > svg": {
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
    } else if(jFirer.is("#s-Image_33") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Image_33 > svg": {
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
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2": {
                      "attributes": {
                        "background-color": "#89BFFF",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#89BFFF",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3": {
                      "attributes": {
                        "background-color": "#89BFFF",
                        "background-image": "none",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Eurostile,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Button_3": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#89BFFF",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#89BFFF",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#89BFFF",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#89BFFF",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#89BFFF",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 2 - 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 2 - 2 - 3 - 3, 0) + 'px'"
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Line_22": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Line_22": {
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Line_22": {
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
                    "target": "#s-Group_8"
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
                    "#s-0d779d46-991a-4162-8c8f-53fec74b125d #s-Image_23 > svg": {
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
    }
  })
  .on("mouseleave dragleave", ".s-0d779d46-991a-4162-8c8f-53fec74b125d .mouseleave", function(event, data) {
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
    } else if(jFirer.is("#s-Text_124")) {
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
    } else if(jFirer.is("#s-Image_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Line_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_23")) {
      jEvent.undoCases(jFirer);
    }
  });