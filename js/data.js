// Data-loader.
// Motoren kalder getLangData('da') og forventer ét objekt med alle
// navngivne data-felter. Vi videregiver Lones data fra data-lone.js.
// Strukturen er bevaret fra tcm-motoren så app.js kan importeres uændret.

import {
  APP_INFO,
  sectionIntros,
  organs,
  extraordinaryMeridians,
  fiveElements,
  practiceGuide,
  educationOverview,
  organOverviews,
  meridianOverviews,
  symptomReference,
  patternLibrary,
  conversationStructure,
  organClock,
  tcmFoundation
} from './data-lone.js?v=7-overview';

const da = {
  APP_INFO,
  sectionIntros,
  organs,
  extraordinaryMeridians,
  fiveElements,
  practiceGuide,
  educationOverview,
  organOverviews,
  meridianOverviews,
  symptomReference,
  patternLibrary,
  conversationStructure,
  organClock,
  tcmFoundation
};

const datasets = { da, en: da };

export function getLangData(lang) {
  return datasets[lang] || datasets.da;
}
