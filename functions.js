function generateCoxcomChart(tableName, valueSuffix, countryFullName, subTitle) {
// Parse the data from an inline table using the Highcharts Data plugin
Highcharts.chart('container', {
    data: {
        table: tableName,
        startRow: 1,
        endRow: 30,
        endColumn: 0
    },

    chart: {
        polar: true,
        type: 'column'
    },

    title: {
        text: countryFullName
    },

    subtitle: {
        text: subTitle
    },

    pane: {
        size: '90%'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
        layout: 'vertical'
    },

    xAxis: {
        tickmarkPlacement: 'off'
    },

    yAxis: {
        min: 0,
        endOnTick: false,
        showLastLabel: true,
        title: {
            text: ''
        },
        reversedStacks: false
    },

    tooltip: {
        valueSuffix: valueSuffix
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            shadow: false,
            groupPadding: 0,
            pointPlacement: 'on',
            cursor: 'pointer',
             point: {
                    events: {
                        click: function (e) {
                            var playerName = e.target.point.name;
                            var playerData = getPlayerData(playerName);
                            if (playerData ===false) {
                                document.getElementById('container').innerHTML = 'data not found';
                                document.getElementById('playerName').innerHTML = '';
                            } else {
                                document.getElementById('bottonNavs').style.display = "none";
                                document.getElementById('playerName').innerHTML = playerName;
                                dashboard('#container', playerData);
                            }
                         }
                    }
                }
        }
    }
});

}

function changeClubName(countryName, countryFullName) {
    window.countryName = countryName;
    window.countryFullName = countryFullName;
    document.getElementById('bottonNavs').style.display = "block";
    document.getElementById('batsmancheckbox').checked = false;
    document.getElementById('bowlercheckbox').checked = false;
    //openAllPlayers();
}

function changeCountryName(countryName, countryFullName) {
    window.countryName = countryName;
    window.countryFullName = countryFullName;
    document.getElementById('bottonNavs').style.display = "block";
    document.getElementById('batsmancheckbox').checked = false;
    document.getElementById('bowlercheckbox').checked = false;
    openAllPlayers();
}

function openAllPlayers() {
    var tableName = window.countryName;
    var countryFullName = window.countryFullName;
    generateCoxcomChart(tableName, ' rating points', countryFullName, 'All players');
    document.getElementById('playerName').innerHTML = '';

}

function openBatsMan() {
    var tableName = window.countryName.concat('batsmans');
    var countryFullName = window.countryFullName;
    generateCoxcomChart(tableName, ' rating points', countryFullName,'Batsman');
    document.getElementById('playerName').innerHTML = '';

}

function openBowlers() {
    var tableName = window.countryName.concat('bowlers');
    var countryFullName = window.countryFullName;
    generateCoxcomChart(tableName, ' rating points', countryFullName, 'Bowlers')
    document.getElementById('playerName').innerHTML = '';
}



