let doc = document;
let statuses = ['undefined', 'started', 'halfway', 'done', 'canceled'];

doc.querySelectorAll('todo').forEach((el) => {
  el.addEventListener('click', (e) => {
    let currentStatus = '';
    for (let status of statuses) {
      if (e.target.classList.contains(status)) {
        currentStatus = status;
        break;
      }
    }

    let index = statuses.indexOf(currentStatus);
    let nextStatus = statuses[index + 1 >= statuses.length ? 0 : index + 1];
    e.target.classList.replace(currentStatus, nextStatus);
  });
});
