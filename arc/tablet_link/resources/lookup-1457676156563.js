(function(window, undefined) {
  var dictionary = {
    "63d1477b-9d1a-4d3c-bfe8-c01687e43d7c": "Instructions",
    "b37396a3-6de1-40ff-9f41-2b6777afcf2f": "Forward Start",
    "cdcdc893-9d8b-4866-a0d7-6fa98cc59fef": "Pair Confirm",
    "1b21849b-d4c5-458b-bf77-dfcadccb4dc1": "Forward",
    "a57e3a45-2a2e-433c-8c12-b0a891704ed8": "Completed",
    "a9fcc731-f9ab-45a3-90a3-fcaa73a1c535": "Pairing",
    "b2b484d1-066a-442c-92cf-f8d98e5e7740": "How do you feel",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Start",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);