import {getCurrentLang} from '../../utils';

import projects_en from './projects_en.js';
import projects_pt from './projects_pt.js';
const resources = {
  en: projects_en,
  pt: projects_pt
}

export const ProjectService = {
  getProjects(){
    const currentLang = getCurrentLang();
    console.log(currentLang);
    const projects = resources[currentLang];
    return projects;
  }
};