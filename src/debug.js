const { unstringifyBigInts, stringifyBigInts } = require('./snark_utils/stringifybigint');
const eddsa = require('../circomlib/src/eddsa.js')

// expected
/*
[
  8342813455761320245860753246541064453130959347426759535493956280345855081934n,
  5664584437443823734110613841194208207201444748007102614314585422057916338909n,
  14581856025477126166111075660025487656341531291692768522050764373003742264071n,
  11480353082813403598430050605296163084142486906719045755632783475400574681131n
]

*/



console.log(
  eddsa.verifyMiMC(
    [ unstringifyBigInts('7894046531851354493142657770766495874293074687827806252637643795997001921389') ],
     { R8:
      [ unstringifyBigInts('11821653554791793657241562726265075685041115338558955550416621446752104974848'),
      unstringifyBigInts('19947156754114910087192974421543546300703462279135115760305470674029105975214') ],
     S:
     unstringifyBigInts('754261621702753732728624495567739238523061746370256665308715220631770625091') }, 
      [ unstringifyBigInts('5686635804472582232015924858874568287077998278299757444567424097636989354076'),
      unstringifyBigInts('20652491795398389193695348132128927424105970377868038232787590371122242422611') ]
   
  )
)
