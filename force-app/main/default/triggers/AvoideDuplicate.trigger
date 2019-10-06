trigger AvoideDuplicate on Student__c (before insert) {

       if(Trigger.isBefore && Trigger.isInsert){
               AvoideDuplicateController.CheckController(Trigger.new);
       }

}