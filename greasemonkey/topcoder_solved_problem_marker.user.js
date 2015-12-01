// ==UserScript==
// @name        topcoder solved problem marker
// @namespace   topcoder
// @description mark solved problems in green
// @include     https://community.topcoder.com/tc?module=ProblemArchive*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js
// @grant       GM_xmlhttpRequest
// ==/UserScript==

$(document).ready(function() {
  var MODIFIED_PROBLEMS = [
    'DitherCounter',    // ImageDithering
    'Yahtzee',          // YahtzeeScore
    'DivDigits',        // DivisorDigits
    'MarginCalculator', // ProfitCalculator
  ];
  
  var MISSING_PROBLEMS = [
    'CricketScores',
    'DriveFailures',
  ];

  var markSolvedProblem = function($problemName) {
    var name = $problemName.html().trim();
    var url = 'https://raw.githubusercontent.com/charles-wangkai/topcoder/HEAD/' + name + '.java';
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      onload: function(resp) {
        if (resp.status === 200) {
          $problemName.parents("tr:first").css('background-color', 'green');
        }
        else if (MODIFIED_PROBLEMS.indexOf(name) >= 0) {
          $problemName.parents("tr:first").css('background-color', 'cyan');
        }
        else if (MISSING_PROBLEMS.indexOf(name) >= 0) {
          $problemName.parents("tr:first").css('background-color', 'gray');
        } 
      }
    });
  };
  
  var $problemNames = $('a.statText').filter(function() {
    return $(this).attr('href').indexOf('/stat?c=problem_statement&pm=') >= 0;
  });
  
  $.each($problemNames, function(index, value) {
    markSolvedProblem($(value));
  });
});
