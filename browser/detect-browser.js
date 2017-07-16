/**
* @returns A string which specifies which is the current
* browser in which we are running.
*
* Currently-supported browser detection and codes:
* * 'opera' -- Opera
* * 'msie' -- Internet Explorer
* * 'safari' -- Safari
* * 'firefox' -- FireFox
* * 'mozilla' -- Mozilla
*
* If we are unable to property identify the browser, we
* return an empty string.
*
* @type String
*/
function getBrowserName() {
  var browserName = "";
  var ua = navigator.userAgent.toLowerCase();
  if ( ua.indexOf( "opera" ) != -1 ) {
    browserName = "opera";
  } else if ( ua.indexOf( "msie" ) != -1 ) {
    browserName = "msie";
  } else if ( ua.indexOf( "safari" ) != -1 ) {
    browserName = "safari";
  } else if ( ua.indexOf( "mozilla" ) != -1 ) {
    if ( ua.indexOf( "firefox" ) != -1 ) {
      browserName = "firefox";
    } else {
      browserName = "mozilla";
    }
  }
  return browserName;
}; 