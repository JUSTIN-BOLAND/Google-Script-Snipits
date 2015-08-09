function removeEmptyColumns() {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
    var maxColumns = sh.getMaxColumns();
    var lastColumn = sh.getLastColumn();
    if (maxColumns - lastColumn != 0) {
        sh.deleteColumns(lastColumn + 1, maxColumns - lastColumn);
    }
}
