import {CsvFileReader} from './CsvFileReader';
import {MatchResults} from './matchResults';
import {MatchReader } from './MatchReader';
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUWins = 0;

for(let match of matchReader.matches){
  if(match[1]== 'Man United' && match[5]===MatchResults.HomeWin ){
    manUWins++;
  }
  else if(match[2]== 'Man United' && match[5]===MatchResults.AwayWin ){
    manUWins++;
  }
}
console.log('man united has won : ',manUWins, ' times');