var moreInfo = document.getElementsByClassName('js-more-info')[0];
var mainSection = document.getElementById('main');
var postContent = document.getElementsByClassName('js-post')[0];

moreInfo.onclick = function() {
  main.className = 'show-sidebar';
};
postContent.onclick = function() {
  main.className = '';
}
  //main.className = 'show-sidebar';