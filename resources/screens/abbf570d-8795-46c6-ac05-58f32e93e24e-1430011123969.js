jQuery("#simulation")
  .on("pageload", ".s-abbf570d-8795-46c6-ac05-58f32e93e24e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-abbf570d-8795-46c6-ac05-58f32e93e24e")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/74d19e7c-905e-494f-9afc-74fb5cbff518",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });