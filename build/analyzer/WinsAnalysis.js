"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
var matchResults_1 = require("../matchResults");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] == 'Man United' && match[5] === matchResults_1.MatchResults.HomeWin) {
                wins++;
            }
            else if (match[2] == 'Man United' && match[5] === matchResults_1.MatchResults.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " games";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
