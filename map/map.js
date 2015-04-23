var election = new Datamap({
  scope: 'usa',
  element: document.getElementById('map-election'),
  responsive: true,
  geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong> <br />Electoral Votes: ' +  data.electoralVotes + ' </div>'
    },
    highlightBorderWidth: 3
  },

  fills: {
  'Republican': '#d02e2f',
  'Democrat': '#306596',
  defaultFill: '#EDDC4E'
},
data:{
  "AZ": {
      "fillKey": "Republican",
      "electoralVotes": 11
  },
  "CO": {
      "fillKey": "Democrat",
      "electoralVotes": 9
  },
  "DE": {
      "fillKey": "Democrat",
      "electoralVotes": 3
  },
  "FL": {
      "fillKey": "Democrat",
      "electoralVotes": 29
  },
  "GA": {
      "fillKey": "Republican",
      "electoralVotes": 16
  },
  "HI": {
      "fillKey": "Democrat",
      "electoralVotes": 4
  },
  "ID": {
      "fillKey": "Republican",
      "electoralVotes": 4
  },
  "IL": {
      "fillKey": "Democrat",
      "electoralVotes": 20
  },
  "IN": {
      "fillKey": "Republican",
      "electoralVotes": 11
  },
  "IA": {
      "fillKey": "Democrat",
      "electoralVotes": 6
  },
  "KS": {
      "fillKey": "Republican",
      "electoralVotes": 6
  },
  "KY": {
      "fillKey": "Republican",
      "electoralVotes": 8
  },
  "LA": {
      "fillKey": "Republican",
      "electoralVotes": 8
  },
  "MD": {
      "fillKey": "Democrat",
      "electoralVotes": 10
  },
  "ME": {
      "fillKey": "Democrat",
      "electoralVotes": 4
  },
  "MA": {
      "fillKey": "Democrat",
      "electoralVotes": 11
  },
  "MN": {
      "fillKey": "Democrat",
      "electoralVotes": 10
  },
  "MI": {
      "fillKey": "Democrat",
      "electoralVotes": 16
  },
  "MS": {
      "fillKey": "Republican",
      "electoralVotes": 6
  },
  "MO": {
      "fillKey": "Republican",
      "electoralVotes": 10
  },
  "MT": {
      "fillKey": "Republican",
      "electoralVotes": 3
  },
  "NC": {
      "fillKey": "Republican",
      "electoralVotes": 15
  },
  "NE": {
      "fillKey": "Republican",
      "electoralVotes": 5
  },
  "NV": {
      "fillKey": "Democrat",
      "electoralVotes": 6
  },
  "NH": {
      "fillKey": "Democrat",
      "electoralVotes": 4
  },
  "NJ": {
      "fillKey": "Democrat",
      "electoralVotes": 14
  },
  "NY": {
      "fillKey": "Democrat",
      "electoralVotes": 29
  },
  "ND": {
      "fillKey": "Republican",
      "electoralVotes": 3
  },
  "NM": {
      "fillKey": "Democrat",
      "electoralVotes": 5
  },
  "OH": {
      "fillKey": "Democrat",
      "electoralVotes": 18
  },
  "OK": {
      "fillKey": "Republican",
      "electoralVotes": 7
  },
  "OR": {
      "fillKey": "Democrat",
      "electoralVotes": 7
  },
  "PA": {
      "fillKey": "Democrat",
      "electoralVotes": 20
  },
  "RI": {
      "fillKey": "Democrat",
      "electoralVotes": 4
  },
  "SC": {
      "fillKey": "Republican",
      "electoralVotes": 9
  },
  "SD": {
      "fillKey": "Republican",
      "electoralVotes": 3
  },
  "TN": {
      "fillKey": "Republican",
      "electoralVotes": 11
  },
  "TX": {
      "fillKey": "Republican",
      "electoralVotes": 38
  },
  "UT": {
      "fillKey": "Republican",
      "electoralVotes": 6
  },
  "WI": {
      "fillKey": "Democrat",
      "electoralVotes": 10
  },
  "VA": {
      "fillKey": "Democrat",
      "electoralVotes": 13
  },
  "VT": {
      "fillKey": "Democrat",
      "electoralVotes": 3
  },
  "WA": {
      "fillKey": "Democrat",
      "electoralVotes": 12
  },
  "WV": {
      "fillKey": "Republican",
      "electoralVotes": 5
  },
  "WY": {
      "fillKey": "Republican",
      "electoralVotes": 3
  },
  "CA": {
      "fillKey": "Democrat",
      "electoralVotes": 5
  },
  "CT": {
      "fillKey": "Democrat",
      "electoralVotes": 7
  },
  "AK": {
      "fillKey": "Republican",
      "electoralVotes": 3
  },
  "AR": {
      "fillKey": "Republican",
      "electoralVotes": 6
  },
  "AL": {
      "fillKey": "Republican",
      "electoralVotes": 9
  }
}
});


election.labels();
