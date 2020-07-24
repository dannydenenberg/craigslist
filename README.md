# the-ae
Kinda like craigslist.

TODO: 
  - Hover over star, it lights up the edges
  - starcolor/banish in search results
  - print qr code (easy with javascript QR generator library)
  - functionality (jquery)
    * control favorites on/off
    * control banish on/off
    * flagging posts
  - when banishing post, add "has-banished is-banished" to body class
  - super easy to print posting with QR as image
```js
function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + 'great listing' + '</h1>');
    mywindow.document.write('<img src="https://images.craigslist.org/00H0H_8Uvg608ffux_05E082_600x450.jpg" />');
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/


setTimeout(() => {
    mywindow.print();
    mywindow.close();
}, 500);

    return true;
}
```