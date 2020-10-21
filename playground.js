const BMParser = require('./index');

(async () => {
  const result = await BMParser.readFromHTMLFile('./bookmarks_error.html');
  console.log(result);
})();
