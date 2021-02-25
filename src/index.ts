import {CsvFileReader} from './CsvFileReader';
import {MatchReader } from './MatchReader';
import { ConsoleReport} from './reporter/ConsoleReport';
import {WinAnalysis } from './analyzer/WinsAnalysis';
import { Summary } from './Summary';
import {HtmlReport } from './reporter/HtmlReport';

const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();


// const summaryConsole = new Summary(
//   new WinAnalysis('Man United'),
//   new ConsoleReport()
// )
// summaryConsole.buildAndPrintReport(matchReader.matches);

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);