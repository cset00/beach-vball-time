urls = [
  {
    // url: 'https://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=404&s=8329&t=3730&embedded=',
    url:
      "https://m95pp3sq2c.execute-api.us-east-1.amazonaws.com/vball/short-cuts/",
    container: "#container1"
  },
  {
    //url: 'https://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=405&s=8329&t=3513&embedded=',
    url:
      "https://m95pp3sq2c.execute-api.us-east-1.amazonaws.com/vball/hotline-bling/",
    container: "#container2"
  },
  {
    //url: 'https://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=406&s=8329&t=3711&embedded=',
    url:
      "https://m95pp3sq2c.execute-api.us-east-1.amazonaws.com/vball/hotline/",
    container: "#container3"
  }
];

renderContent = (response, container, row) => {
  // team name
  $(container)
    .find(".team-name")
    .text(
      $(response)
        .find("#content > h1")
        .text()
    );
  // opponent
  $(container)
    .find(".opp-team")
    .text(
      $(response)
        .find(`#ladder ${row} td:nth-child(2)`)
        .text()
    );
  // day
  $(container)
    .find(".day")
    .text(
      $(response)
        .find(`#ladder ${row} td:nth-child(3)`)
        .text() +
        ", " +
        $(response)
          .find(`#ladder ${row} td:nth-child(4)`)
          .text()
    );
  // time
  $(container)
    .find(".time")
    .text(
      $(response)
        .find(`#ladder ${row} td:nth-child(5)`)
        .text()
    );
  // court
  $(container)
    .find(".court")
    .text(
      $(response)
        .find(`#ladder ${row} td:nth-child(6)`)
        .text()
    );
};

urls.forEach(function(url) {
  $.get(url, function(response) {
    rowCount = $(response)
      .find("#ladder")
      .find("tr").length;

    renderContent(response, $(url.container), "tr:nth-child(2)");

    if (rowCount > 3) {
      container = $(url.container)
        .clone()
        .appendTo("main");
      renderContent(response, container, "tr:nth-child(3)");
    } else {
      return;
    }
  });
});
