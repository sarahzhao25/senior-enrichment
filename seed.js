const {db} = require('./server/db/models');
const Campus = require('./server/db/models/Campus');
const Student = require('./server/db/models/Student');

const campuses = [{
  name: 'Ganymede University',
  imageUrl: '/CampusImages/image1.jpg',
  description: 'Ultimate is a non-contact disc sport played by two teams of seven players. The object of the game is to score goals. A goal is scored when a player catches any legal pass in the end zone that player is attacking. A player may not run while holding the disc. The disc is advanced by passing it to other players. The disc may be passed in any direction. Any time a pass is incomplete, a turnover occurs, resulting in an immediate change of the team in possession of the disc.'
}, {
  name: 'Titan University',
  imageUrl: '/CampusImages/image2.jpg',
  description: 'Spirit of the Game: Ultimate relies upon a spirit of sportsmanship that places the responsibility for fair play on the player. Highly competitive play is encouraged, but never at the expense of mutual respect among competitors, adherence to the agreed upon rules, or the basic joy of play. Protection of these vital elements serves to eliminate unsportsmanlike conduct from the Ultimate field. Such actions as taunting opposing players, dangerous aggression, belligerent intimidation, intentional infractions, or other win-at-all-costs behavior are contrary to the spirit of the game and must be avoided by all players.'
}, {
  name: 'Moon University',
  imageUrl: '/CampusImages/image3.jpg',
  description: "Captain's Clause: A game may be played under any variation of the rules agreed upon by the captains of the teams involved. In tournament play, variations are subject to approval by the event organizer. Such things as game length, field dimensions, number of players and stall count can easily be altered to suit the level of play. Before a game starts, each team designates one captain to represent them in disagreements and arbitration."
}, {
  name: 'Triton University',
  imageUrl: '/CampusImages/image4.jpg',
  description: 'Pull: The throw from one team to the other that starts play at the beginning of a half or after a goal. It is not a legal pass for scoring and has many special provisions (Section VIII.B). The player on the pulling team who possesses the disc and signals readiness is the puller.'
}, {
  name: 'Charon University',
  imageUrl: '/CampusImages/image5.jpg',
  description: 'If the disc comes to rest on the playing field proper , a member of the team becoming offense must put the disc into play within ten seconds after it comes to rest. After ten seconds elapse, a defensive player within three meters of the disc may announce disc in, and then initiate and continue the stall count, but only if a defensive player has given audible warnings of ten and five seconds (the pre-stall).'
}, {
  name: 'Titania University',
  imageUrl: '/CampusImages/image6.jpg',
  description: 'If a marker commits a marking violation after being called for a marking violation during the same stall count (XIV.A.1) but before the thrower is in the act of throwing, the thrower may choose to either call another marking violation or to treat the marking violation as a general defensive violation (XVI). To treat it as a general violation, the thrower must call violation.'
}, {
  name: 'Ariel University',
  imageUrl: '/CampusImages/image12.jpg',
  description: 'Each player is entitled to occupy any position on the field not occupied by an opposing player, unless specifically overridden elsewhere, provided that no personal contact is caused in taking such a position.'
}, {
  name: 'Callisto University',
  imageUrl: '/CampusImages/image8.jpg',
  description: 'A goal is scored when an in-bounds player catches any legal pass in the end zone of attack, and retains possession of the disc throughout all ground contact related to the catch. To be considered in the end zone after gaining possession of the disc in accordance with II.O.2 and XV.E, the player\'s first point of ground contact must be completely in the end zone. When an in-bounds player in possession of the disc whose first ground contact will be completely within the end zone loses possession of the disc due to an uncontested foul, or lands out of the end zone due to an uncontested force-out foul (XVI.H.3.b.4), that player is awarded a goal.'
}, {
  name: 'Iapetus University',
  imageUrl: '/CampusImages/image9.jpg',
  description: 'If an offensive player unnecessarily delays putting the disc into play in violation of rule XIX.B, a defender within three meters of the spot the disc is to be put into play may issue a delay of game warning instead of calling a violation. If the behavior in violation of rule XIX.B is not immediately stopped, the marker may initiate and continue a stall count, regardless of the actions of the offense. In order to invoke this rule, after announcing delay of game, the marker must give the offense two seconds to react to the warning, and then announce disc in before initiating the stall count.'
}, {
  name: 'Tethys University',
  imageUrl: '/CampusImages/image11.jpg',
  description: 'Pivot: The particular part of the body in continuous contact with a single spot on the field during a thrower\'s possession once the thrower has come to a stop or has attempted a throw or fake. When there is a definitive spot for putting the disc into play, the part of the body in contact with that spot is the pivot.'
}]

const gpa = () => Math.round((Math.random() * 3 + 1) * 100) / 100;
const campusId = () => Math.round(Math.random() * (campuses.length - 1)) + 1

const students = [{
  firstName: 'Emily',
  lastName: 'Baecher',
  email: 'eBaecher@gmail.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Shellie',
  lastName: 'Cohen',
  email: 'sCohen@gmail.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Kim',
  lastName: 'Culpan',
  email: 'kCulpan@gmail.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Sydney',
  lastName: 'Dobkin',
  email: 'sDobkin@gmail.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Tulsa',
  lastName: 'Douglas',
  email: 'tDouglas@gmail.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Jojo',
  lastName: 'Emerson',
  email: 'jEmerson@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Jenny',
  lastName: 'Gobin',
  email: 'jGobin@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Kami',
  lastName: 'Groom',
  email: 'kGroom@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Aly',
  lastName: 'Heath',
  email: 'aHeath@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Lienn',
  lastName: 'Hoffman',
  email: 'lHoffman@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Rachel',
  lastName: 'Kramer',
  email: 'rKramer@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Caitlyn',
  lastName: 'Lee',
  email: 'cLee@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Becca',
  lastName: 'Ludford',
  email: 'bLudford@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Becky',
  lastName: 'Malinowski',
  email: 'bMalinowski@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Chelsea',
  lastName: 'Murphy',
  email: 'cMurphy@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Vicky',
  lastName: 'Negus',
  email: 'vNegus@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Caitlin',
  lastName: 'OConnell',
  email: 'cOconnell@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Erin',
  lastName: 'Rea',
  email: 'eRea@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Lauren',
  lastName: 'Sadler',
  email: 'lSadler@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Elana',
  lastName: 'Schwam',
  email: 'eSchwam@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Amber',
  lastName: 'Sinicrope',
  email: 'aSinicrope@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Claudia',
  lastName: 'Tajima',
  email: 'cTajima@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Courtney',
  lastName: 'Verhaalen',
  email: 'cVerhaalen@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Julianna',
  lastName: 'Werffeli',
  email: 'jWerffeli@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Cassie',
  lastName: 'Wong',
  email: 'cWong@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'ANGELA',
  lastName: 'ZHU',
  email: 'ANGELAZHU@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Ari',
  lastName: 'Jackson',
  email: 'aJackson@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Mike',
  lastName: 'Zalisk',
  email: 'mZalisk@brutesquad.com',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Harry',
  lastName: 'Potter',
  email: 'hPotter@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Hermione',
  lastName: 'Granger',
  email: 'hGranger@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Ron',
  lastName: 'Weasley',
  email: 'rWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Albus',
  lastName: 'Dumbledore',
  email: 'ADumbledore@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Minerva',
  lastName: 'McGonagall',
  email: 'mMcGonagall@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Draco',
  lastName: 'Malfoy',
  email: 'dMalfoy@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Dean',
  lastName: 'Thomas',
  email: 'dThomas@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Fred',
  lastName: 'Weasley',
  email: 'fWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'George',
  lastName: 'Weasley',
  email: 'gWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Ginny',
  lastName: 'Weasley',
  email: 'gWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Percy',
  lastName: 'Weasley',
  email: 'PWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Arthur',
  lastName: 'Weasley',
  email: 'AWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Molly',
  lastName: 'Weasley',
  email: 'mWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Tom Marvolo',
  lastName: 'Riddle',
  email: 'VOLDEMORT@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Argus',
  lastName: 'Filch',
  email: 'MrsNorris@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Sirius',
  lastName: 'Black',
  email: 'SBlack@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'James',
  lastName: 'Potter',
  email: 'jPotter@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Lily',
  lastName: 'Evans',
  email: 'LEvans@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Remus',
  lastName: 'Lupin',
  email: 'rLupin@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Severus',
  lastName: 'Snape',
  email: 'sSnape@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Bill',
  lastName: 'Weasley',
  email: 'bWeasley@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Charlie',
  lastName: 'Weasley',
  email: 'dragons@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Helga',
  lastName: 'Hufflepuff',
  email: 'Helga@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Rowena',
  lastName: 'Ravenclaw',
  email: 'Rowena@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Godric',
  lastName: 'Gryffindor',
  email: 'Godric@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Salazar',
  lastName: 'Slytherin',
  email: 'Salazar@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}, {
  firstName: 'Neville',
  lastName: 'Longbottom',
  email: 'nLongbottom@hogwarts.edu',
  gpa: gpa(),
  campusId: campusId()
}]

const seed = () =>
  Promise.all(campuses.map(campus => Campus.create(campus))
)
  .then(() =>
  Promise.all(students.map(student => Student.create(student))
))

const main = () => {
  console.log('Syncing db...maybe?');
  db.sync({force: true})
    .then(() => {
      console.log('Seeding database!...?')
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      console.log("DB SEEDED!!")
      return null;
    })
}

main();
