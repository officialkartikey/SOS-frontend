import { EngineeringMilestone, HighlightMetric, DevelopmentStep } from '../types';

export const ENGINEERING_MILESTONES: EngineeringMilestone[] = [
  {
    id: 'm1',
    milestoneNum: 'MILESTONE 01',
    status: 'PROTOTYPE READY',
    title: 'Functional Prototype',
    description: 'NIRVANA has progressed from concept finalization to prototype development, module testing, and system integration.',
    indicator: 'Prototype Ready',
    icon: 'developer_board',
    statusType: 'prototype'
  },
  {
    id: 'm2',
    milestoneNum: 'MILESTONE 02',
    status: 'IP MILESTONE',
    title: 'Innovation Patent',
    description: 'NIRVANA has an innovation patent associated with the smart safety device.',
    indicator: 'IP Status: Published',
    icon: 'verified_user',
    statusType: 'patent'
  },
  {
    id: 'm3',
    milestoneNum: 'MILESTONE 03',
    status: 'SELECTED',
    title: 'STPI OCP 2.0',
    description: 'NIRVANA has been selected in the STPI OCP 2.0 program.',
    indicator: 'Selected in STPI OCP 2.0',
    icon: 'military_tech',
    statusType: 'selected'
  },
  {
    id: 'm4',
    milestoneNum: 'MILESTONE 04',
    status: 'MEDIA FEATURE',
    title: 'Featured in RASTA Magazine',
    description: 'NIRVANA has been featured in RASTA Magazine, highlighting the smart safety footwear innovation.',
    indicator: 'Featured',
    icon: 'newspaper',
    statusType: 'media'
  }
];

export const HIGHLIGHT_METRICS: HighlightMetric[] = [
  {
    id: 'hm-1',
    value: '1',
    line1: 'PROTOTYPE',
    line2: 'READY',
    badge: 'Hardware Build',
    note: 'Functional Prototype Built'
  },
  {
    id: 'hm-2',
    value: '2',
    line1: 'CORE DEVELOPMENT',
    line2: 'MILESTONES',
    badge: 'Architecture & Core',
    note: 'From Concept to System'
  },
  {
    id: 'hm-3',
    value: '3',
    line1: 'EXTERNAL',
    line2: 'RECOGNITIONS',
    badge: 'Ecosystem Validation',
    note: 'Incubation, STPI & Media'
  },
  {
    id: 'hm-4',
    value: '4',
    line1: 'PUBLISHED',
    line2: 'IP STATUS',
    badge: 'Intellectual Property',
    note: 'Innovation Patent Published'
  }
];

export const DEVELOPMENT_JOURNEY: DevelopmentStep[] = [
  {
    step: '01',
    title: 'Concept Finalized',
    status: 'completed',
    detail: 'Core problem definition and product requirements'
  },
  {
    step: '02',
    title: 'Hardware Architecture Designed',
    status: 'completed',
    detail: 'Schematic, power budget & sensor array specification'
  },
  {
    step: '03',
    title: 'Prototype Development',
    status: 'completed',
    detail: 'Physical prototyping and embedded system layout'
  },
  {
    step: '04',
    title: 'Module Testing',
    status: 'completed',
    detail: 'Individual subsystem verification and bench testing'
  },
  {
    step: '05',
    title: 'System Integration',
    status: 'completed',
    detail: 'End-to-end hardware, firmware & sole embedding'
  },
  {
    step: '06',
    title: 'Prototype Ready',
    status: 'current',
    detail: 'Full-scale functional prototype verified'
  }
];
