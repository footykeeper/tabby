function runCode () {
  var html = $('#html').val();
  var js = $('#js').val();
  var css = $('#css').val();
  var string = '';
  var cssBreak = html.split('<head>');
  var jsBreak = cssBreak[1].split('</body>');
  string += cssBreak[0] + '<head>';
  string += '<style>' + css + '</style>';
  string += jsBreak[0] + '<scr' + 'ipt>' + js + '</scr' + 'ipt>' + '</body>';
  string += jsBreak[1];
  document.getElementById('displayDoc').srcdoc = string;
}

$(document).ready(function () {
  $('#html').text('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8"/>\n    <title>Sample Code</title>\n  </head>\n  <body>\n    <p>This is my page!</p>\n  </body>\n</html>');
  $('#js').text('// This is the JavaScript Pane');
  $('#css').text('/* This is the CSS Pane */');
});

$('.text-input').keyup(function () {
  runCode();
});
