({
	fetchAccountDetails : function(component, event, helper) {
        var tableColumn = [{
                "label": "Important Account",
                "fieldName": "VIP_Account__c",
                "cellAttributes": {
                    "class": {
                        "fieldName": "showClass"
                    },
                    "iconName": {
                        "fieldName": "displayIconName"
                    }
                }
            },
            {
                "label": "Account Name",
                "fieldName": "linkName",
                "type": "url",
                "typeAttributes": {
                    "label": {
                        "fieldName": "Name"
                    },
                    "target": "_blank"
                },
                "cellAttributes": {
                    "class": {
                        "fieldName": "showClass"
                    }
                }
            },
            {
                "label": "Industry",
                "fieldName": "Industry",
                "type": "picklist",
                "cellAttributes": {
                    "class": {
                        "fieldName": "showClass"
                    }
                }
            },
            {
                "label": "Account Type",
                "fieldName": "Type",
                "type": "picklist",
                "cellAttributes": {
                    "class": {
                        "fieldName": "showClass"
                    }
                }
            }];
        component.set('v.tableCol' , tableColumn);
        var action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var records = response.getReturnValue();
                records.forEach(function(record){ 
                    if(typeof record.Id != 'undefined'){ 
                        // based on VIP Account field value set the icon and style class to each record 
                        // https://www.lightningdesignsystem.com/icons/#utility 
                        if(record.VIP_Account__c){
                            record.showClass = (record.VIP_Account__c === true ? 'redcolor' : 'blackcolor');
                            record.displayIconName = 'utility:check';  
                        }
                        else{
                            record.showClass = (record.VIP_Account__c === false ? 'blackcolor' : 'redcolor');
                            record.displayIconName = 'utility:close';     
                        }
                        // set the record link with record id  
                        record.linkName = '/'+record.Id;   
                    }
                });
                // after the loop set the updated account records on "accountList" aura attribute
                component.set("v.accountList", records);
            }
        });
                $A.enqueueAction(action);

	}
})