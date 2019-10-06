trigger checkbatchAPex on Account (after insert) {
        
         //FutureClass.myFutureMethod();
//ID jobID = System.enqueueJob(new AddPrimaryContact());
          list<contact> cc= new list<contact>();

  for(account a : trigger.new){
      
    system.debug('@@'+ a);
    for(integer i =0; i<=150; i++){
                contact c= new contact();
                c.lastname=a.name + i;
                c.AccountId =a.id;
                 cc.add(c);
                    system.debug('@@'+ c);

        }

  }
insert cc;
system.debug('@@'+ cc);


}