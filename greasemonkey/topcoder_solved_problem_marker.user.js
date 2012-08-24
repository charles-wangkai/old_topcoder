// ==UserScript==
// @name        topcoder solved problem marker
// @namespace   topcoder
// @description mark solved problems in green
// @include     http://community.topcoder.com/tc?module=ProblemArchive*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js
// ==/UserScript==

var markSolvedProblem = function($problemName) {
	var url = 'http://goalboytopcoder.googlecode.com/svn/trunk/' + $problemName.html().trim() + '.java';
	GM_xmlhttpRequest({
		method: 'GET',
		url: url,
		onload: function(resp) {
			if (resp.status === 200) {
				$problemName.css('background-color', 'green');
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
