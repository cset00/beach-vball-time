console.log('ola')
urls = [
    {
        url: 'http://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=404&s=8329&t=3730&embedded=',
        container: '#container1'
    },
    {
        url: 'http://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=405&s=8329&t=3513&embedded=',
        container: '#container2'
    },
    {
        url: 'http://results.sportskeepglobal.com/vic--sandstorm-altona/stadium-team-fixture.php?sp=25&g=406&s=8329&t=3711&embedded=',
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



