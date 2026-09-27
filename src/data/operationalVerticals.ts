import { OperationalVertical } from '../types';

export const OPERATIONAL_VERTICALS: OperationalVertical[] = [
  {
    id: 'construction',
    title: 'Civil & Scaffolding',
    description: 'Elevated platforms and multi-tier construction sites. High-G free-fall detection triggers automated site alarms before ground impact.',
    benefit: 'Elevation fall escalation',
    compliance: 'OSHA 1926.501 Fall Protection',
    icon: 'construction'
  },
  {
    id: 'manufacturing',
    title: 'Heavy Manufacturing',
    description: 'Automated press lines and robotic assembly facilities. Tracks worker cumulative joint strain, gait symmetry, and standing fatigue across 12-hour shifts.',
    benefit: 'Ergonomic posture guard',
    compliance: '38% Reduction in MSD Work Losses',
    icon: 'precision_manufacturing'
  },
  {
    id: 'energy',
    title: 'Energy & Offshore',
    description: 'Refineries, deep-sea platforms, and subterranean mines. Sub-GHz wireless mesh penetrates thick steel bulkheads and subterranean rock strata without line of sight.',
    benefit: 'Lone-worker non-LOS mesh',
    compliance: 'ATEX Zone 0 Intrinsically Safe',
    icon: 'oil_barrel'
  },
  {
    id: 'logistics',
    title: 'Logistics & Fulfillment',
    description: 'High-throughput fulfillment centers and heavy pallet logistics. Identifies improper asymmetric manual lifting loads and micro-slips on slick surfaces.',
    benefit: 'Micro-slip & lifting coaching',
    compliance: '100% Floor Area Tracking',
    icon: 'warehouse'
  }
];
