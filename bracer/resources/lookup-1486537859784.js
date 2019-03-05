(function(window, undefined) {
  var dictionary = {
    "4868d6e5-4868-4b52-a046-d98b4586cb40": "Inprogress",
    "6b5fc762-e0ca-45c3-92fe-d16271288228": "Exercise",
    "ed16d32b-9482-4648-b3f4-17964ef90a3f": "Post-exercise",
    "dd33a556-4537-40fa-a044-e3e5cc0f86df": "Exercises_stats23",
    "160b7f1d-1e5c-46e7-806f-dee25b9e69f9": "Initial2-7",
    "d891f62a-789c-433f-9e58-81b21cf76185": "Initial2-6",
    "9eb53f63-11af-4724-96dc-ffb7db98d829": "Initial2-5",
    "6d277749-a7f1-49f2-842c-10dc84a87a58": "Initial2-4",
    "8a00b8e1-d317-45db-8384-12653911a0cd": "Initial2-3",
    "7992c347-f025-409d-b4fd-bac9bba63d1a": "Initial2-2",
    "69bc70b3-8586-48f5-8ee4-aae062ac418d": "Initial2-1",
    "06cf939b-9079-4e51-b111-81db3761ba53": "Pre-exercise",
    "c16b54df-8e3a-41ea-932b-c8f5fba7eb3d": "Initial2",
    "a179f22b-e48b-4274-8b8b-9d82d023e883": "Dashboard2",
    "65293716-2183-4df1-b024-574cfce330d9": "Exercises_stats2",
    "d7772ad9-85d3-4702-b31c-376261f9ca31": "List",
    "05cf4932-d26d-4168-bfc6-7cab750699d1": "Previous_exercises",
    "46fe8024-464d-41e4-bde2-21c7127cba72": "Post-exercise2",
    "9eddeb20-8a16-4e90-92e5-2e739252f2f4": "Exercises_stats",
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