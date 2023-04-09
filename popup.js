let send = document.getElementById('get');
send.onclick = function(element) {
  getLink();
};
function getLink() {
  var query = {
    active: true,
    currentWindow: true
  };  
  chrome.tabs.query(query, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;	
    window.alert(url);
  });
}

