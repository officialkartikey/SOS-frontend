export interface SoleLayer {
  id: number;
  layerNum: string;
  name: string;
  shortDesc: string;
  material: string;
  spec: string;
  standard: string;
  accentColor: string;
}

export interface SignalStep {
  step: string;
  latency: string;
  title: string;
  description: string;
  icon: string;
  isCritical?: boolean;
}

export interface OperationalVertical {
  id: string;
  title: string;
  description: string;
  benefit: string;
  compliance: string;
  icon: string;
}

export interface EngineeringMilestone {
  id: string;
  milestoneNum: string;
  status: string;
  title: string;
  description: string;
  indicator: string;
  metric?: string;
  icon: string;
  statusType?: 'prototype' | 'patent' | 'selected' | 'media';
}

export interface HighlightMetric {
  id: string;
  value: string;
  line1: string;
  line2: string;
  badge?: string;
  note?: string;
}

export interface DevelopmentStep {
  step: string;
  title: string;
  status: 'completed' | 'current';
  detail?: string;
}

export type GaitPhase = 'heel' | 'mid' | 'toe' | 'fall';

export interface GaitTelemetry {
  balanceText: string;
  balanceClass: string;
  peakForce: string;
  fatigueIndex: string;
  copX: number;
  copY: number;
  nodeLoads: Record<string, { label: string; bg: string; scale: string }>;
}
