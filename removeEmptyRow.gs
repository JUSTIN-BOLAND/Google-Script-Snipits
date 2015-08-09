function removeEmptyRows1() {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
    var maxRows = sh.getMaxRows();
    var lastRow = sh.getLastRow();
    if (maxRows - lastRow != 0) {
        sh.deleteRows(lastRow + 1, maxRows - lastRow);
    }
};
