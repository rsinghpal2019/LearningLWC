({
	saveRecordCntrlr : function(component, event, helper) {
          component.find("recordHandler").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
            	console.log('recordSaved');
            	component.set("v.curView", "baseView" );   
                 var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        title : 'Record Save',
                        message: 'Record has been Saved Successfully',
                        messageTemplate: 'Record {0} created! See it {1}!',
                        duration:' 5000',
                        key: 'info_alt',
                        type: 'success',
                        mode: 'pester'
                    });
                    toastEvent.fire();
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
        var idx= event.currentTarget.id;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
        "recordId": component.get("v.recordId"),
        "slideDevName": "detail"
         });
          navEvt.fire(); 
      //  $A.enqueueAction(action);
	},
})