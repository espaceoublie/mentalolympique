document.addEventListener("DOMContentLoaded", function () {
  const redirects = {
    "/séances-à-distance": "/seances-a-distance",
    "/test2": "/home",
    "/test-tarifs": "/infos-pratiques/index",
    "/test": "/home",
    "/speech-motivation-et-cohésion": "/speech-motivation-et-cohesion",
    "/préparer-une-compétitions": "/preparer-une-competition",
    "/préparer-une-compétition": "/preparer-une-competition",
    "/préparation-mentale/seance-skype": "/seances-a-distance",
    "/préparation-mentale/preparation-mentale-espoirs-17": "/preparation-mentale/preparation-mentale-espoirs-17",
    "/préparation-mentale/preparation-mentale-adultes": "/preparation-mentale/preparation-mentale-adultes",
    "/préparation-mentale/mental-coaching": "/preparation-mentale/mental-coaching",
    "/le-relâchement": "/le-relachement",
    "/le-lâcher-prise": "/le-lacher-prise",
    "/lavis-des-parents/football-féminin": "/lavis-des-parents/football-feminin",
    "/lavis-des-parents/basket-dubaï": "/lavis-des-parents/basket-dubai",
    "/lavis-des-coachés/ski-masculin": "/avis-sportifs/ski-masculin",
    "/lavis-des-coachés/ski": "/avis-sportifs/ski-feminin",
    "/lavis-des-coachés/saut-dobstacles-cso": "/avis-sportifs/saut-dobstacles-cso",
    "/lavis-des-coachés/karaté-contact": "/avis-sportifs/karate-contact",
    "/lavis-des-coachés/guitare": "/avis-sportifs/guitare",
    "/lavis-des-coachés/judo": "/avis-sportifs/judo",
    "/lavis-des-coachés/golf": "/avis-sportifs/golf",
    "/lavis-des-coachés/entraineur-de-basketball": "/avis-sportifs/entraineur-de-basketball",
    "/lavis-des-coachés/football": "/avis-sportifs/football",
    "/lavis-des-coachés/danse": "/avis-sportifs/danse",
    "/lavis-des-coachés/entraineur-de-hand-ball": "/avis-sportifs/entraineur-de-hand-ball",
    "/lavis-des-coachés/chant-lyrique": "/avis-sportifs/chant-lyrique",
    "/lavis-des-coachés/boxe": "/avis-sportifs/boxe",
    "/la-peur-de-gagners": "/la-peur-de-gagner",
    "/lavis-des-coachés/billard": "/avis-sportifs/billard",
    "/infos-pratiques/test": "/home",
    "/la-motivations": "/la-motivation",
    "/lavis-des-coachés/équitation": "/avis-sportifs/equitation",
    "/infos-pratiques/retour": "/home",
    "/infos-pratiques/références": "/infos-pratiques/references",
    "/infos-pratiques/mentions-légales": "/infos-pratiques/mentions-legales",
    "/infos-pratiques/médiapresse": "/infos-pratiques/mediapresse",
    "/infos-pratiques/déroulement-des-séances": "/infos-pratiques/deroulement-des-seances",
    "/infos-pratiques/code-de-déontologie": "/infos-pratiques/code-de-deontologie",
    "/infos-pratiques/à-propos": "/infos-pratiques/a-propos",
    "/home1": "/home",
    "/gérer-le-stress": "/gerer-le-stress",
    "/conférences": "/conferences",
    "/concentration-ou-attention": "/ameliorer-sa-concentration",
    "/coaching1/préparation-mentale-et-développement-personnel": "/coaching1/preparation-mentale-et-developpement-personnel",
    "/coaching1/mental-training-coaching": "/preparation-mentale/mental-coaching",
    "/coaching1/développement-personnel": "/coaching1/developpement-personnel",
    "/coaching1/avis-de-coachée-annaëlle": "/coaching1/avis-de-coachee-annaelle",
    "/coaching1/avis-de-coachée-chantal": "/coaching1/avis-de-coachee-chantal",
    "/coaching1/avis-étudiant-maxime": "/coaching1/avis-etudiant-maxime",
    "/coaching1/avis-de-coaché": "/coaching1/avis-de-coache",
    "/avis1/témoignages-dentraineurs": "/avis1/temoignages-dentraineurs",
    "/avis1/avis-de-coachés": "/avis1/avis-de-coaches",
    "/avis": "/avis-sportifs/",
    "/améliorer-sa-concentrations": "/ameliorer-sa-concentration"
  };

    const currentPath = decodeURIComponent(window.location.pathname);
  const target = redirects[currentPath];

  if (target) {
    window.location.replace(target);
  } else {
    window.location.replace("/");
  }
});

