"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summaryConsole = new Summary(
//   new WinAnalysis('Man United'),
//   new ConsoleReport()
// )
// summaryConsole.buildAndPrintReport(matchReader.matches);
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
