let doc = document;
let statuses = ['o', 'started', 'halfway', 'done', 'canceled'];

doc.querySelectorAll('div.todo').forEach((el) => {
  el.addEventListener('click', (e) => {
    statuses.every((status, index) => {
      if (e.target.classList.contains(status)) {
        e.target.classList.replace(status, statuses[index + 1 > statuses.length - 1 ? 0 : index + 1]);
        return false;
      } else if (!e.target.classList.length || e.target.classList.contains('o')) {
        e.target.classList.add(statuses[1]);
        return false;
      } else return true;
    });
  });
});
