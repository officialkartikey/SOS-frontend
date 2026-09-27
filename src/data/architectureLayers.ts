import { SoleLayer } from '../types';

export const ARCHITECTURE_LAYERS: SoleLayer[] = [
  {
    id: 5,
    layerNum: '05',
    name: 'Ergonomic Memory Cushion Layer',
    shortDesc: 'Antimicrobial Dual-Density PU Foam (12mm drop)',
    material: 'Dual-Density Molded Polyurethane & Micro-Capillary Mesh',
    spec: '12mm Heel Stack • Electrostatic Dissipation (ESD) < 35 MΩ',
    standard: 'ISO 20345 Ergonomic Comfort & Hygiene Standard',
    accentColor: '#64748b'
  },
  {
    id: 4,
    layerNum: '04',
    name: 'Edge MCU & RF Harvester Module',
    shortDesc: 'ARM Cortex-M4F • Sub-GHz Mesh • Kinetic Dynamo',
    material: 'FR-4 High-Tg Composite with Polyimide Flex Extensions',
    spec: '32-bit ARM @ 64MHz • Sub-GHz 868/915MHz • LiFePO4 Solid-State',
    standard: 'AES-256 Crypto & ATEX Zone 0 Intrinsic Safety',
    accentColor: '#dc2626'
  },
  {
    id: 3,
    layerNum: '03',
    name: '8-Point Tactile Force Matrix',
    shortDesc: '100 Hz Piezoresistive Grid • 0–1,500 kPa Range',
    material: 'Silver Conductive Nano-Tracers on Fluoropolymer Film',
    spec: '8 Isolated Calibration Nodes • 0.1 kPa Sensitivity • 100 Hz I2C',
    standard: 'Calibrated Biomechanical ASTM Plantar Benchmarks',
    accentColor: '#3b82f6'
  },
  {
    id: 2,
    layerNum: '02',
    name: 'Ballistic Kevlar Anti-Puncture Plate',
    shortDesc: '1,100 N Penetration Shield • EN ISO 20345 Compliant',
    material: 'Multi-Axial Aramid Para-Fiber Woven Composite',
    spec: '1,100 N Nail Puncture Resistance • Zero Electrical Conductivity',
    standard: 'EN ISO 20345 §5.8.2 Anti-Perforation Benchmark',
    accentColor: '#d97706'
  },
  {
    id: 1,
    layerNum: '01',
    name: 'Nitrile Armor Outsole (SRC Rated)',
    shortDesc: 'Vulcanized High-Abrasion Rubber • Hydrocarbon Resistant',
    material: 'High-Density Vulcanized Nitrile Rubber Compound',
    spec: 'SRC Slip Resistance Coeff > 0.38 • Hydrocarbon & Acid Resistant',
    standard: 'EN ISO 20344 / 20345 Slip & Abrasion Certification',
    accentColor: '#0f172a'
  }
];
