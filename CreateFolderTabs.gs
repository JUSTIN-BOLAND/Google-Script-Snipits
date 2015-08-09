function CreateFolderFilesTab(tabName){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tabs = ss.getSheets();
  var tabName = [];
  for(var i=0;i<tabs.length;i++)
    tabName.push(tabs[i].getName());
Logger.log(tabName);
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
};
