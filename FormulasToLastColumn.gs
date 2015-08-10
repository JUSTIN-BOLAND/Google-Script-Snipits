function SetAverageAndFormula(){
  
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName("Sheet1");
 var maxCol = first.getMaxColumns();
 var maxRows = first.getMaxRows();
 n =maxCol-1; //converts column numbers to letters
 var range = first.getRange(1,maxCol,maxRows);
 var val = range.getValues();
 var values = val.filter(isEmpty); 
 var emptyAverage = first.getRange(2,maxCol,1,1); 
  //This is the rest of the range
 var emptyQuery = first.getRange(3,maxCol,maxRows-2,1); 
 
  if (values.length >= 1){
 emptyAverage.setValue("=average("+colName(n)+"3:"+colName(n) +maxRows+ ")");
               
  }
  else{};


       var k =1; 
       for (var i = 3; i<maxRows+1; i++ , k++){
    var Cells = first.getRange(i,maxCol,1,1); 
    var targetRow = "\'\"&A"+i+"&\"%\'";
         var targetCol = "Date \'\"&TEXT(" + colName(maxCol-1)+"1\,\"yyyy-MM-dd\")&\"\' ";     
         Cells.setValue('=QUERY(Data!$A$2:$C,"SELECT sum(C) WHERE A LIKE'+ targetRow +' AND B = ' +targetCol+'LABEL sum(C)\'\'",0)/QUERY(Data!$A$2:$C,"Select Count(A) Where A  LIKE'+ targetRow +' AND B = ' +targetCol+'LABEL Count(A)\'\'\",1)');
                       
                       
                       
                      
         
         Logger.log(Cells);
  
    
    }
      
};
