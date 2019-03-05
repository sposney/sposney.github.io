jQuery("#simulation")
  .on("click", ".s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 .click", function(event, data) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Input_17 input": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_87": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_87 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_87 span": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9")) {
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
    }
  })
  .on("mouseenter dragenter", ".s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 .mouseenter", function(event, data) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_65": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_65 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_65 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_66": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_66 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_66 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_67": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_67 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_68": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_68 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_68 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_69": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_69 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_69 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_70": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_70 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_70 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_71": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_71 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_71 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_72": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_72 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_72 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_73": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_73 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_73 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_74": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_74 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_74 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_75": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_75 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_75 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_76": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_76 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_76 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_77": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_77 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_77 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_88": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_88 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_88 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_89": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_89 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_89 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_90": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_90 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_90 span": {
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
    } else if(jFirer.is("#s-Text_56") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_56": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_56 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_56 span": {
                      "attributes": {
                        "color": "#434343",
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
    } else if(jFirer.is("#s-Text_58") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_58": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_58 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "right"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_58 span": {
                      "attributes": {
                        "color": "#434343",
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_1 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_2 span": {
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
    } else if(jFirer.is("#s-Text_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_3 span": {
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
    } else if(jFirer.is("#s-Text_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_4 span": {
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
    } else if(jFirer.is("#s-Text_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_5 span": {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_6": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_6 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
    } else if(jFirer.is("#s-Text_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_7 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
    } else if(jFirer.is("#s-Text_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_8": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_8 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_9": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_9 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_10": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_10 span": {
                      "attributes": {
                        "color": "#99CCFF",
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_11": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_11 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
    } else if(jFirer.is("#s-Text_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_12 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
    } else if(jFirer.is("#s-Text_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_13": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_13 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
    } else if(jFirer.is("#s-Text_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_14": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_14 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
    } else if(jFirer.is("#s-Text_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_15 span": {
                      "attributes": {
                        "color": "#89BFFF",
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
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_238": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Eurostile,Arial"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_238 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 #s-Text_238 span": {
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
  .on("mouseleave dragleave", ".s-ab894edb-4dc0-4fd6-8895-7ca433da18e0 .mouseleave", function(event, data) {
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
    } else if(jFirer.is("#s-Text_56")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_58")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_238")) {
      jEvent.undoCases(jFirer);
    }
  });