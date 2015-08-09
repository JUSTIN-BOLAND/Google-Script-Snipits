function SetAverageAndFormulaAuto() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var dataSheet = ss.getSheetByName("Sheet1");
    var maxCol = dataSheet.getMaxColumns();
    var maxRows = dataSheet.getMaxRows();
    //Check if the columns are empty. 
    var holdValue = [];
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
            Logger.log("Add Formulas to this column");
            //Got to this range and add the average formula. 
                var postAverageCells = dataSheet.getRange(colName(j) + "2");
            //add this formula
            postAverageCells.setValue("=average(" + colName(j) + "3:" +
                colName(j) + maxRows + ")");
            for (var l = 3; l < maxRows + 1; l++) {
                var Cells = dataSheet.getRange(l, m, 1, 1);
                var targetRow = "\'\"&A" + l + "&\"%\'";
                var targetCol = "Date \'\"&TEXT(" + colName(maxCol - 1) +
                    "1\,\"yyyy-MM-dd\")&\"\' ";
                Cells.setValue(
                    '=QUERY(Data!$A$2:$C,"SELECT sum(C) WHERE A LIKE' +
                    targetRow + ' AND B = ' + targetCol +
                    'LABEL sum(C)\'\'",0)/QUERY(Data!$A$2:$C,"Select Count(A) Where A  LIKE' +
                    targetRow + ' AND B = ' + targetCol +
                    'LABEL Count(A)\'\'\",1)');
            }
        }
    }
}
