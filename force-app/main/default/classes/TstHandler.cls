public class TstHandler{


    public static void executeTest(){
    
    batchAccountUpdate b = new batchAccountUpdate();
    database.executeBatch(b);
    }
}