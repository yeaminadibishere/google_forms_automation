function auto_data() {

  var formURL="https://docs.google.com/forms/d/e/1FAIpQLSfmepj661gmkUgleFCLPrqeB0z9mPyI8DLZ4kTBI0Y3eByOCQ/viewform";

  var wrkBk = SpreadsheetApp.getActiveSpreadsheet();
  var wrkSht = wrkBk.getSheetByName("Data");
  var numb = wrkSht.getRange("G11").getValue();
  var time = wrkSht.getRange("H11").getValue();
  var eaten = wrkSht.getRange("I11").getValue();
  var randnumb = wrkSht.getRange("J11").getValue();  

  var datamap=[
    "entry.1290225723" + numb,
    "entry.1493000579=" + randnumb,
    "entry.1582850009=" + time,
    "entry.908606572=" + eaten
    ];
 var prefillUrl = formURL+"?"+ datamap[0] + "&" + datamap[1] + "&" + datamap[2] + "&" + datamap[3];
  Logger.log(prefillUrl);
}