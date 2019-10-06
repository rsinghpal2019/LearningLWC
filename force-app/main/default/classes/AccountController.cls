public with sharing class AccountController {

    @AuraEnabled
    public static void createAccount(string accountName) {
        Account account = new Account (Name = accountName);
        insert account;
    }     
    
    @AuraEnabled
    public static Boolean isDuplicateName(string accountName) {
        return ([SELECT Name FROM Account WHERE Name = :accountName].size() != 0);
    }    

}