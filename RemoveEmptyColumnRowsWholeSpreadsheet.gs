//This is used to delete all empty rows and columns to keep the database small
function removeEmptyColumns(sheetnames) {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames);
    var maxColumns = sh.getMaxColumns();
    var lastColumn = sh.getLastColumn();
    if (maxColumns - lastColumn != 0) {
        sh.deleteColumns(lastColumn + 1, maxColumns - lastColumn);
    }; 

    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames);
    var maxRows = sh.getMaxRows();
    var lastRow = sh.getLastRow();
    if (maxRows - lastRow != 0) {
        sh.deleteRows(lastRow + 1, maxRows - lastRow);
    //  removeEmptyColumns2();
    }  
}
//1 minute trigger  
function nameSheets(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var currentSheet = ss.getSheetByName("report");
  var sheets = ss.getSheets();
  var sheetnames = [];
  for(var i=0;i<sheets.length;i++)
    sheetnames.push([sheets[i].getName()]);
  Logger.log(sheetnames);
  for (j = 0; j <sheetnames.length;j++){
              removeEmptyColumns(sheetnames[j]);
    
  }
}  
