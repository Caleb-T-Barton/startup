function getActivity() {
    fetch('https://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => {
      let activityEl = document.querySelector('#activity');
      activityEl.textContent = 'In the mean-time ' + data.activity.toLowerCase();
    });
}