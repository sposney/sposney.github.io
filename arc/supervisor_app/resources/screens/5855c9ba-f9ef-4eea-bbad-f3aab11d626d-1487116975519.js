jQuery("#simulation")
  .on("click", ".s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d .click", function(event, data) {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Input_17 input": {
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
    } else if(jFirer.is("#s-Text_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_101": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_101 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_101 span": {
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
    }
  })
  .on("click", ".s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Radio_button_6")) {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47 span": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Image_5 > svg": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47 span": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Rectangle_47": {
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
                      "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Image_5 > svg": {
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
  .on("mouseenter dragenter", ".s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d .mouseenter", function(event, data) {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_65": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_65 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_65 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_66": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_66 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_66 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_67 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_68": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_68 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_68 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_69": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_69 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_69 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_70": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_70 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_70 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_71": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_71 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_71 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_72": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_72 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_72 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_73": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_73 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_73 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_74": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_74 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_74 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_75": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_75 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_75 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_76": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_76 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_76 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_77": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_77 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_77 span": {
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
    } else if(jFirer.is("#s-Text_102") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_102": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_102 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_102 span": {
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
    } else if(jFirer.is("#s-Text_103") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_103": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_103 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_103 span": {
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
    } else if(jFirer.is("#s-Text_104") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_104": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_104 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_104 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_240": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_240 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_240 span": {
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
    } else if(jFirer.is("#s-Text_246") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_246": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_246 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_246 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_22": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_22 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_23": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_23 span": {
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
    } else if(jFirer.is("#s-Text_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_24": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_24 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_25": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_25 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_26": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_26 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_27": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_27 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_27 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_28": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_28 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_28 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_29": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_29 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_29 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_30": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_30 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_30 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_32": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_32 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_32 span": {
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
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_33": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_33 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d #s-Text_33 span": {
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
    }
  })
  .on("mouseleave dragleave", ".s-5855c9ba-f9ef-4eea-bbad-f3aab11d626d .mouseleave", function(event, data) {
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
    } else if(jFirer.is("#s-Text_102")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_103")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_104")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_240")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_246")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_24")) {
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
    }
  });