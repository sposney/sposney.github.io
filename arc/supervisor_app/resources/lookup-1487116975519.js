(function(window, undefined) {
  var dictionary = {
    "9eefd7e9-68bc-4bb5-bae3-3ce4bc1fdeb8": "Company Page 2",
    "0d779d46-991a-4162-8c8f-53fec74b125d": "Company Page",
    "fd626c0b-d4c9-40c7-9205-49120611f7cf": "Login",
    "de0149a6-40fe-485a-8abb-0d947075945d": "Dashboard",
    "5855c9ba-f9ef-4eea-bbad-f3aab11d626d": "Reporting",
    "ab894edb-4dc0-4fd6-8895-7ca433da18e0": "Dashboard2",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "27c41a16-15dd-4860-a170-0a4fbba5c240": "Template 2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
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