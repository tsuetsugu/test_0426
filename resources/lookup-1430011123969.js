(function(window, undefined) {
  var dictionary = {
    "d4ca9010-51bc-4cba-b878-843d49e5f2db": "Concierge2",
    "5ea983a4-0164-4d8f-bf28-6875d7a80ec6": "Concierge_end",
    "e8a02a07-daf1-4af0-98eb-917448201a2e": "Recommend1",
    "74d19e7c-905e-494f-9afc-74fb5cbff518": "Concierge1",
    "069ef780-783f-4739-bed0-5ddb6a401160": "Recommend1_guide",
    "abbf570d-8795-46c6-ac05-58f32e93e24e": "Splash Page",
    "c065dbe8-df61-4c30-85f4-fa38affac0b7": "Concierge1_confirm",
    "ad63ef25-6ca8-4f66-afd0-d09d1206b6ab": "Template 1"
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