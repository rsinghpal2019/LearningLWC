trigger updateContact on Contact (after insert) {
    
    List<Account> aa = New List<Account>();
    
    for(Contact c : Trigger.New){
        Account acc = New Account(Id = c.Accountid);
        acc.Description = 'Test';
        aa.add(acc);
   
    }   
    update aa;
}