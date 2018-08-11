
urls = [
    {
        // url: 'https://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=404&s=8329&t=3730&embedded=',
        url: 'https://m95pp3sq2c.execute-api.us-east-1.amazonaws.com/vball/short-cuts/',
        container: '#container1'
    },
    {
        //url: 'https://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=405&s=8329&t=3513&embedded=',
        url: 'https://m95pp3sq2c.execute-api.us-east-1.amazonaws.com/vball/hotline-bling/',
        container: '#container2'
    },
    {
        //url: 'https://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=406&s=8329&t=3711&embedded=',
        url: 'https://m95pp3sq2c.execute-api.us-east-1.amazonaws.com/vball/hotline/',
        container: '#container3'
    }
]

urls.forEach(function(url) {
    $.get(url, function(response){
        // team name
        $(url.container).find('.team-name').text($(response).find('#content > h1').text())
        // opponent
        $(url.container).find('.opp-team').text($(response).find('#ladder tr:nth-child(2) td:nth-child(2)').text())
        // day
        $(url.container).find('.day').text($(response).find('#ladder tr:nth-child(2) td:nth-child(3)').text() + ', ' + $(response).find('#ladder tr:nth-child(2) td:nth-child(4)').text())
        // time
        $(url.container).find('.time').text($(response).find('#ladder tr:nth-child(2) td:nth-child(5)').text())
        // court
        $(url.container).find('.court').text($(response).find('#ladder tr:nth-child(2) td:nth-child(6)').text())
    })  
})



