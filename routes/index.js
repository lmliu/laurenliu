/*
 * GET home page.
 */

exports.view = function(req,res) {
	res.render('index');
};

exports.view = function(req,res) {
  /* TAGS */
  var both = '[DEV+DSGN]';
  var dev = '[DEV]';
  var dsgn = '[DSGN]';

  res.render('index', {
    'projects': [
      {
        'bkgClass': 'd4sd',
        'tag': both,
        'projectTitle': 'D4SD',
        'projectDesc': 'D4SD was an online civic engagement platform that presented a challenge for San Diego citizens to design solutions for city issues. The site itself provides information and resources for the challenge.',
        'siteLink': 'https://d4sd.org',
        'infoPath': 'yes',
        'imgPath': '/img/preview-d4sd.png',
        'roles': [
          'Developer', 
          'Designer'
        ],
        'year': '2016-2017',
        'type': 'web' 
      },
      {
        'bkgClass': 'dopeLst',
        'tag': both,
        'projectTitle': 'laurenliu.me',
        'projectDesc': 'dopeLst is a CRUD application designed to be an index of your music library. It provides a fast and cached platform to ground all of that information in one place.',
        'infoPath': 'yes',
        'siteLink': 'https://dopelst-a697d.firebaseapp.com/',
        'imgPath': '/img/preview-dope.png',
        'roles': [
          'Developer', 
          'Designer'
        ],
        'year': '2017',
        'type': 'Web' 
      },
      {
        'bkgClass': 'dopeLst',
        'tag': both,
        'projectTitle': 'dopeLst',
        'projectDesc': 'dopeLst is a CRUD application designed to be an index of your music library. It provides a fast and cached platform to ground all of that information in one place.',
        'infoPath': 'yes',
        'siteLink': 'https://dopelst-a697d.firebaseapp.com/',
        'imgPath': '/img/preview-dope.png',
        'roles': [
          'Developer', 
          'Designer'
        ],
        'year': '2017',
        'type': 'Web' 
      },
      {
        'bkgClass': 'frank',
        'tag': both,
        'projectTitle': 'Frank',
        'projectDesc': 'Frank is a social media web mobile website designed for fashion feedback. The site allows users to post photos and receive feedback through a rating system and a comment section.',
        'infoPath': '/project',
        'siteLink': 'https://frank-app.herokuapp.com/',
        'imgPath': '/img/preview-frank.png',
        'roles': [
          'Developer', 
          'Designer'
        ],
        'year': '2015',
        'type': 'Web (Mobile Only)' 
      },
      {
        'bkgClass': 'avics',
        'tag': dsgn,
        'projectTitle': 'A.V.I.C.S',
        'projectDesc': 'A.V.I.C.S is short for "Autonomous Vehicle Intent Communication System." It\'s a prototype for communication between self-driving cars and other entities that will share roads.',
        'infoPath': '/project',
        'imgPath': '/img/AVICS/poster-min.png',
        'roles': [
          'Designer',
          'UX Researcher'
        ],
        'year': '2017',
        'type': 'Design Concept' 
      },
      {
        'bkgClass': 'fusion',
        'tag': dsgn,
        'projectTitle': 'Fusion XV',
        'projectDesc': 'Fusion is one of the biggest hip-hop dance competitions on the West Coast. I was on the graphics team for the 15th iteration, and I created watercolor-themed advertising posters and badges for the competition.',        'infoPath': '/project',
        'infoPath': '/project',
        'imgPath': '/img/preview-fusion.png',
        'roles': [
          'Graphic Designer',
        ],
        'year': '2015',
        'type': 'Graphic Design' 
      },
    ]
  });
};
