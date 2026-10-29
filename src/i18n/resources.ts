import encommon from './en/common.json'
import escommon from './es/common.json'
import enhome from './en/home.json'
import eshome from './es/home.json'
import enabout from './en/about.json'
import esabout from './es/about.json'
import enourWork from './en/ourWork.json'
import esourWork from './es/ourWork.json'
import encommunityAid from './en/communityAid.json'
import escommunityAid from './es/communityAid.json'
import enprojects from './en/projects.json'
import esprojects from './es/projects.json'
import enevents from './en/events.json'
import esevents from './es/events.json'
import enchasqui2026 from './en/chasqui2026.json'
import eschasqui2026 from './es/chasqui2026.json'
import enfestival2026 from './en/festival2026.json'
import esfestival2026 from './es/festival2026.json'
import enfestivalSchedule2026 from './en/festivalSchedule2026.json'
import esfestivalSchedule2026 from './es/festivalSchedule2026.json'
import encourses from './en/courses.json'
import escourses from './es/courses.json'
import enparticipation from './en/participation.json'
import esparticipation from './es/participation.json'
import encontact from './en/contact.json'
import escontact from './es/contact.json'

// Keep the existing translation keys; each domain owns its own copy.
export const translations = {
  en: { ...encommon, ...enhome, ...enabout, ...enourWork, ...encommunityAid, ...enprojects, ...enevents, ...enchasqui2026, ...enfestival2026, ...enfestivalSchedule2026, ...encourses, ...enparticipation, ...encontact },
  es: { ...escommon, ...eshome, ...esabout, ...esourWork, ...escommunityAid, ...esprojects, ...esevents, ...eschasqui2026, ...esfestival2026, ...esfestivalSchedule2026, ...escourses, ...esparticipation, ...escontact },
} as const
