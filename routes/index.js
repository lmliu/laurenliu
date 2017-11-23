/*
 * GET home page.
 */

exports.view = function(req,res) {
  /* TAGS */
  var both = '[DEV/DESIGN]';
  var dev = '[DEV]';
  var dsgn = '[DESIGN]';

  res.render('index', {
    'projects': [
      {
        'bkgClass': 'd4sd',
        'tag': both,
        'projectTitle': 'D4SD',
        'projectDesc': 'D4SD was an online civic engagement platform that presented a challenge for San Diego citizens to design solutions for city issues. The site provides info and resources for the challenge.',
        'siteLink': 'https://d4sd.org',
        'infoPath': 'yes',
        'imgPath': '/img/preview-d4sd.png',
        'roles': [
          'Developer', 
          'Designer'
        ],
        'year': 'Ongoing',
        'type': 'Web' 
      },
      {
        'bkgClass': 'personal',
        'tag': both,
        'projectTitle': 'laurenliu.me',
        'projectDesc': 'A personal portfolio to showcase my work. Designed and built by me with blood, sweat, and caffeine (but mostly caffeine). ',
        'comingSoon': 'yes',
        'siteLink': 'http://laurenliu.me',
        'imgPath': '/img/personal/logo.png',
        'roles': [
          'Developer', 
          'Designer'
        ],
        'year': 'Ongoing',
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
        'altProdTitle': 'MOBILE SITE',
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
        'comingSoon': 'yes',
        'altProdTitle': 'VIEW POSTER',
        'siteLink': '/hq/avics-poster.pdf',
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
      {
        'bkgClass': 'iconography',
        'tag': dsgn,
        'projectTitle': 'Icons & Logos',
        'projectDesc': 'I’ve made icons for various projects over the course of the years. Click “More Info” below to see a collection of them.',
        'infoPath': '/project',
        'imgPath': '/img/icons/preview-icons-dt.png',
        'roles': [
          'Graphic Designer',
        ],
        'year': 'Various',
        'type': 'Graphic Design' 
      },
    ]
  });
};
