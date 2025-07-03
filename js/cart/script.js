
  const parseData = (data) => {
    data.forEach(el => console.log(el.title))

    // work item
  }

  fetch(url)
  .then((response) => response.json())
  .then((data) => parseData(data));
