function CreateFolderFilesTab(tabName){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tabs = ss.getSheets();
  var tabName = [];
  for(var i=0;i<tabs.length;i++)
    tabName.push(tabs[i].getName()); 
  
  if (tabName.indexOf('Sheet1') >-1){
  }else{
     ss.insertSheet('Sheet1');
  }
  if (tabName.indexOf('Data') >-1){
  }else{
     ss.insertSheet('Data');
  }
      if (tabName.indexOf('Dates') >-1){
  }else{
     ss.insertSheet('Dates');
  }
    

  }


function getMainData1(){
//Get Data
        var ss = SpreadsheetApp.openById("1HALtcoNT_F23PnoWX_tpehhpigTQNBD198bSqWx-k8o");//ID of main data +++DO NOT CHANGE
        var exsheet = ss.getSheetByName('Jumpstart');//Sheet in main data - Jumpstart - SuperJuniors - SmartTeens +++ CHANGE THIS
        var range = exsheet.getRange("A4:A").getValues();  //Class codes
        var range2 = exsheet.getRange("K4:K").getValues(); //Dates
        var range3 = exsheet.getRange("C4:C").getValues(); //Parents contacted
        var tss = SpreadsheetApp.getActiveSpreadsheet();   //Where to put data 
        var sheet = tss.getSheetByName('Data');
        sheet.clear();
        sheet.appendRow(["Class Code","Date","Parents not contacted",]);															
        //Row to start putting data on. 
                         
             
              
                  var rows = 0; //=width and code 
                  for (var j = 0; j < range.length; j++) {
                   var endColumn = 1;
                      var arr = [];
                      arr.push(range);
                      //count the number of rows in the array
                      rows = arr[0].length;
                      for (var k = 0; k < arr.length; k++) {
                          var x = (arr[k]);
                      }
                  }
                  //Outputs the data to the sheet
                  sheet.getRange(2, 1, rows, endColumn).setValues(x);

                  var rows2 = 0; //=width and code 
                  for (var l = 0; l < range2.length; l++) {
                   var endColumn2 = 1;
                      var arr = [];
                      arr.push(range2);
                      //count the number of rows in the array
                      rows2 = arr[0].length;
                      for (var m = 0; m < arr.length; m++) {
                          var y = (arr[m]);
                      }
                  }
                  //Outputs the data to the sheet
                  sheet.getRange(2, 2, rows2, endColumn2).setValues(y);


                  var rows3 = 0; //=width and code 
                  for (var n = 0; n < range3.length; n++) {
                   var endColumn3 = 1;
                      var arr = [];
                      arr.push(range3);
                      //count the number of rows in the array
                      rows3 = arr[0].length;
                      for (var o = 0; o < arr.length; o++) {
                          var z = (arr[o]);
                      }
                  }
                  //Outputs the data to the sheet
                  sheet.getRange(2, 3, rows3, endColumn3).setValues(z);
             

           }



//This is used to delete all empty rows and columns to keep the database small
function removeEmptyColumnsRows(sheetnames) {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames);
    var maxColumns = sh.getMaxColumns();
    var lastColumn = sh.getLastColumn();
    var maxRows = sh.getMaxRows();
    var lastRow = sh.getLastRow();
    if (maxColumns - lastColumn != 0) {
        sh.deleteColumns(lastColumn + 1, maxColumns - lastColumn);
    };
    if (maxRows - lastRow != 0) {
        sh.deleteRows(lastRow + 1, maxRows - lastRow);
    }  
}
//1 minute trigger  
function cleanSheets(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheetnames = [];
  for(var i=0;i<sheets.length;i++)
    sheetnames.push([sheets[i].getName()]);
  Logger.log(sheetnames);
  for (j = 0; j <sheetnames.length;j++){
   removeEmptyColumnsRows(sheetnames[j]);
    
  }
}  
  
  
  


function isEmpty(value) {
    return value != "";
}
//This function cleans up the "Dates" sheet, becuase the array formula is too long. 
//On a one minute timer
function removeEmptyRows() {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dates");
    var row = sh.getRange("A2:A100").getValues();
    var rowCount = row.filter(isEmpty); 
    var rowCounter= rowCount.length+1;
  Logger.log(row);
    var maxRows = sh.getMaxRows();
  Logger.log(maxRows);
    sh.deleteRows(rowCounter, maxRows-rowCounter);
    }; 

//
//converts numbers to column letters   
function colName(n) {
        var ordA = 'A'.charCodeAt(0);
        var ordZ = 'Z'.charCodeAt(0);
        var len = ordZ - ordA + 1;
              var s = "";
        while(n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        return s;
    
}
// Example:  colName(n)
function SetAverageAndFormulaAuto() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var dataSheet = ss.getSheetByName("Sheet1");
    var datesSheet = ss.getSheetByName("Dates");  
    var maxCol = dataSheet.getMaxColumns();
    var maxRows = dataSheet.getMaxRows();
    var holdValue = [];
     datesSheet.clear();
     datesSheet.appendRow(["Date","Date Converted"]);
  var datesCell1 = datesSheet.getRange("A2");
     datesCell1.setValue("=sort(UNIQUE(Data!B2:B))");
  var datesCell2 = datesSheet.getRange("B2");
     datesCell2.setValue("=arrayformula(TEXT(A2:A7,\"yyyy-MM-dd\"))");
  
      //Add List of centers and First Cells name                                  +++ CHANGE THIS AS MORE CENTERS ARE ADDED
    var Column1 = ['Jumpstart Average', 'Average', 'H1YK', 'H2YK', 'H3YK',
        'H4YK', 'H5YK', 'H8YK', 'H9YK', 'H10YK', 'H11YK', 'H12YK',
        'H14YK', 'H15YK', 'H16YK', 'H17YK', 'H18YK', 'H19YK', 'H20YK',
        'N1YK', 'N2YK', 'N3YK', 'N4YK', 'N5YK', 'V1YK', 'A1YK', 'BH1YK',
        'BD1YK'
    ];
  //Add the center list to Sheet1
    for (var p = 0; p < Column1.length; p++) {
        var q = p + 1
        var centerCells = dataSheet.getRange(q, 1, 1, 1);
      centerCells.setValue(Column1[p]);}
   //Add the times to sheet1   
      var timesCell = dataSheet.getRange("B1");
      timesCell.setValue("=transpose(QUERY(Dates!B2:B8))");
    
 //   cleanSheets();
      var row = dataSheet.getRange("A2:A").getValues();
    var rowCount = row.filter(isEmpty);
    var rowCounter = rowCount.length + 1;
    //Check if the columns are empty. 
    for (var i = 1; i < maxCol; i++) {
        var getSecondColumn = dataSheet.getRange(colName(i) + "1").getValues();
        holdValue.push(getSecondColumn[0][0]);
        Logger.log(holdValue);
    }
    for (var k = 0; k < maxCol - 1; k++) {
        var j = k + 1;
        var m = k + 2;
        //Look to see which cells are blank
        if (holdValue[k] === "") {
            Logger.log("It's Blank")
        } else {
       //     Logger.log("Add Formulas to this column");
            //Got to this range and add the average formula. 
            var postAverageCells = dataSheet.getRange(colName(j) + "2");
            //add this formula
            postAverageCells.setValue("=IFERROR(average(" + colName(j) + "3:" +
                colName(j) + rowCounter + "))");
            for (var l = 3; l < rowCounter + 1; l++) {
                var Cells = dataSheet.getRange(l, m, 1, 1);
                var targetRow = "\'\"&A" + l + "&\"%\'";                  //+++ DO NOT CHANGE THIS
                var targetCol = "Date \'\"&TEXT(" + colName(m - 1) +      //+++ DO NOT CHANGE THIS
                    "1\,\"yyyy-MM-dd\")&\"\' ";                           //+++ DO NOT CHANGE THIS
                Cells.setValue(
                    '=IFERROR(IFERROR((QUERY(Data!$A$2:$C,"SELECT sum(C) WHERE A LIKE' +   // CHANGE THIS
                    targetRow + ' AND B = ' + targetCol +                                          
                    'LABEL sum(C)\'\'",0))/IFERROR(QUERY(Data!$A$2:$C,"Select Count(A) Where A  LIKE' + // CHANGE THIS
                    targetRow + ' AND B = ' + targetCol +
                    'LABEL Count(A)\'\'\",1))))');   // CHANGE THIS
            }
        }
    }
    cleanSheets();
}


  
    
    
      




