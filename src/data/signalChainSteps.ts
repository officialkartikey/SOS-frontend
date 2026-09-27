import { SignalStep } from '../types';

export const SIGNAL_CHAIN_STEPS: SignalStep[] = [
  {
    step: 'Step 01',
    latency: 'T+0 ms',
    title: 'Kinetic Impact',
    description: 'Worker footsteps trigger piezoresistive nodes, capturing dynamic load distribution across calcaneus and phalanges.',
    icon: 'footprint'
  },
  {
    step: 'Step 02',
    latency: 'T+4 ms',
    title: 'Edge MCU Inference',
    description: 'Onboard firmware evaluates zero-gravity free-fall, violent impact deceleration, and subsequent immobility thresholds locally.',
    icon: 'memory'
  },
  {
    step: 'Step 03',
    latency: 'T+180 ms',
    title: 'Sub-GHz Mesh Relay',
    description: 'Priority RF distress packets propagate across industrial Sub-GHz nodes and anchors, penetrating concrete and steel bulkheads.',
    icon: 'sensors'
  },
  {
    step: 'Step 04',
    latency: 'T+620 ms',
    title: 'Cloud Correlation',
    description: 'High-throughput MQTT broker correlates spatial facility floor plans, worker ID, and cross-verifies shift health status.',
    icon: 'cloud'
  },
  {
    step: 'Step 05',
    latency: '< 1.2 sec',
    title: 'Supervisor Dispatch',
    description: 'Targeted emergency notification with sub-meter location pinpointing dispatched to on-site medical staff and control room.',
    icon: 'emergency',
    isCritical: true
  }
];
