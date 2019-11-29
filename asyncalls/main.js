$("#fetchName").click(async () => {
  // initialize fields
  initFields();

  await doAwait();
  const dataAsync = await getNameAsync();
  const dataPromise = await getNamePromise();
  const dataCallback = await new Promise(resolve => {
    getNameCallback(data => {
      resolve(data);
    });
  });
  const dataRX = await getNameRX().toPromise();

  fillNames(dataAsync.results[0].name, 1);

  fillNames(dataPromise.results[0].name, 2);

  fillNames(dataCallback.results[0].name, 3);

  fillNames(dataRX.results[0].name, 4);
});

// ------------------- functions
initFields = () => {
  for (i = 1; i <= 4; i++) {
    $("#fetch" + i).html("fetching...");
  }
};

fillNames = (data, index) => {
  const name = `${data.first} ${data.last}`;
  $("#fetch" + index).html(name);
};

// wait for the async function getNameAsync()
doAwait = async () => {};

// ------------------- async services

getNameAsync = async () => {
  return $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function(data) {
      return data;
    }
  });
};

getNamePromise = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function(data) {
        resolve(data);
      }
    });
  });
};

getNameRX = async () => {
  return Rx.Observable.create(observer => {
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function(data) {
        observer.next(data);
      }
    });
  });
};

getNameCallback = callback => {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function(data) {
      callback(data);
    }
  });
};
