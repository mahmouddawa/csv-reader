import {Analyzer} from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResults } from '../matchResults'

export class  WinAnalysis implements Analyzer{
  constructor(public team:string){}
  run(matches: MatchData[]):string{
    let wins = 0;

    for(let match of matches){
      if(match[1]== 'Man United' && match[5]===MatchResults.HomeWin ){
        wins++;
      }
      else if(match[2]== 'Man United' && match[5]===MatchResults.AwayWin ){
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`
  }
}