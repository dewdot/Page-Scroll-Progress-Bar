const pageProgressBar = document.getElementById('page-progress-bar');
const pageContent = document.getElementById('page')
const pageContentHeight = pageContent.offsetHeight;
const winHeight = window.outerHeight;
const scrollHeight = pageContentHeight - winHeight;

const animatePageProgressBar = () => {
  scrollPosition = document.documentElement.scrollTop;
  barWidth = (100 / scrollHeight) * scrollPosition;
  pageProgressBar.style.width = (barWidth +'%');
}

window.addEventListener("scroll", animatePageProgressBar)