---
name: Apex Industrial Safety
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#bb0112'
  on-secondary: '#ffffff'
  secondary-container: '#e02928'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2f'
  on-tertiary-container: '#76859b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000b'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system serves mission-critical industrial IoT safety hardware monitoring, telematics, and hardware administration platforms. The target audience comprises plant managers, environmental health and safety (EHS) directors, and enterprise operations executives who require immediate, unclouded visibility into shop-floor risks, fail-safes, and hardware diagnostics.

The aesthetic philosophy centers on **Corporate / Modern Precision**. It rejects decorative embellishments, dark modes, playful shapes, or non-standard abstractions. Instead, the interface relies on rigorous visual cadence, generous whitespace, pristine micro-contrast, and deliberate, restrained safety alerts. Red is treated not as a brand fill, but strictly as an operational directive indicating caution, critical status, or actionable system alerts.

## Colors

The color palette is deliberately calibrated for high clarity, eye comfort under operational ambient lighting, and definitive hierarchy:

- **Primary Canvas & Surfaces**: Baseline canvas is pure white (`#ffffff`). Secondary structural containers (page backdrops, sidebars, nested panels) use cool technical off-whites (`#f8fafc`, `#f1f5f9`).
- **Typography & Structural Accents**: Deep charcoal navy (`#0f172a`) delivers maximum text legibility without the harshness of pure black. Mid-tone slate (`#334155`) handles secondary narrative copy and metadata, while muted slate (`#64748b`) anchors placeholders, captions, and structural icons.
- **Safety Critical (Secondary)**: High-visibility scarlet (`#dc2626`) is deployed sparingly for critical states, safety trips, thresholds, and primary destructive confirmations. Hover or pressed states transition to deep crimson (`#b91c1c`).
- **Borders & Dividers**: Crisp hair-thin dividers use `#e2e8f0` to articulate data panels and cards without visual weight.
- **Color Mode**: Exclusively light mode. No dark themes are supported or permitted.

## Typography

The type system is built on **Hanken Grotesk**, a refined sans-serif combining structural geometry with high legibility across dense telemetry readouts and executive reporting.

- **Headlines & Metric Readings**: Use weights 600 and 700 with subtle negative tracking (`-0.01em` to `-0.02em`) to guarantee crisp visual density.
- **Body & Telemetry**: Kept at regular 400 with a neutral line height (`1.5`) for rapid visual scanning across dense tabular data.
- **Labels & System Badges**: Employ medium (500) and semi-bold (600) weights with slightly widened tracking (`+0.01em` to `+0.04em`) to establish authoritative, unambiguous micro-copy.

## Layout & Spacing

The layout is grounded in a 12-column fluid grid system with controlled maximum page constraints (`1440px` max container width for primary views, stretchable for dense hardware diagnostic tables).

- **Grid Architecture**: 12 columns on desktop (breakpoints >1024px) with `1.5rem` gutters and `2.5rem` outer canvas padding. Tablet interfaces (768px-1023px) step down to 8 columns with `1.25rem` gutters. Handheld devices (<768px) collapse into a 4-column flow with `1rem` gutters and margins.
- **Component Flow**: Spacing adheres strictly to an 8-point structural system, allowing dense, disciplined alignments. Component gaps scale predictably from `0.25rem` (micro tags) to `2.5rem` (between major diagnostic sections).

## Elevation & Depth

To preserve an industrial-grade, executive feel, elevation relies on **Low-contrast outlines** paired with subtle tonal separation rather than heavy skeuomorphic or diffused drop shadows.

- **Surface Tiers**: Base views sit on `#f8fafc`. Card structures and actionable panels are rendered in `#ffffff` framed by a 1px border of `#e2e8f0`.
- **Shadow Profiles**: Ambient shadows are used only for transient overlay elements (flyouts, dropdowns, modal confirmations). They use an understated, cool-tinted formula: `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -1px rgba(15, 23, 42, 0.04)`.
- **Active & Alert Surfaces**: Cards in critical warning states introduce a 1px border of `#dc2626` coupled with an ultra-faint tint surface (`rgba(220, 38, 38, 0.02)`), avoiding heavy color fills that degrade data readability.

## Shapes

The interface is specified at roundedness level **1 (Soft)**:
- Base inputs, buttons, and status tags feature a tight `0.25rem` (4px) radius.
- Cards, modal containers, and dashboard tiles scale to `0.5rem` (8px).
- Complex telemetry matrices and nested panels maintain `0.25rem` inner radius alignment.

This restrained radius reinforces an architectural, hardware-calibrated precision appropriate for physical safety infrastructure, eliminating consumer-grade pill shapes or overly blunt raw brutalism.

## Components

### Buttons
- **Primary Operational**: Solid `#0f172a` fill, `#ffffff` text, 4px border radius. Hover: `#1e293b`.
- **Safety Critical Action**: Solid `#dc2626` fill, `#ffffff` text. Hover: `#b91c1c`. Reserved for emergency stops, lockouts, and trip resets.
- **Secondary**: `#ffffff` background with 1px border in `#e2e8f0` and `#0f172a` text. Hover: `#f8fafc` background with `#cbd5e1` border.

### Status Chips & Hardware Badges
- **Nominal / Online**: Crisp 1px border in `#e2e8f0`, background `#ffffff`, leading indicator dot in `#059669`, text `#334155`.
- **Safety Hazard / Trip**: Crisp 1px border in `#fecaca`, background `#fef2f2`, text `#991b1b` with leading `#dc2626` pulse indicator.
- **Diagnostics Pending**: Crisp 1px border in `#e2e8f0`, background `#f8fafc`, text `#64748b`.

### Cards & Telemetry Tiles
- Built with a `#ffffff` surface, 1px border in `#e2e8f0`, 8px border radius, and internal padding of `1.5rem`.
- Header areas isolate equipment serial IDs and location stamps using `label-sm` (`#64748b`) paired with `headline-sm` (`#0f172a`).

### Form Inputs & Selectors
- Standard state: Height 40px, `#ffffff` background, 1px border `#e2e8f0`, 4px radius, text `#0f172a`.
- Focus state: 1px border `#0f172a` accompanied by a crisp `0 0 0 1px #0f172a` inner offset ring. Never use generic browser chrome rings.
- Error / Validation state: 1px border `#dc2626`, with inline message in `body-sm` `#dc2626`.

### Checkboxes & Radios
- Square 16px boxes with a 3px radius. Unchecked: `#ffffff` with 1px `#cbd5e1` border. Checked: `#0f172a` fill with `#ffffff` checkmark.

### Additional Industrial Safety Patterns
- **Hardware Telemetry Strip**: A linear diagnostic header showing IoT heartbeat, latency, and sensor integrity using monospace numerals in Hanken Grotesk (`font-variant-numeric: tabular-nums`).
- **Emergency Hardware Lockout Banner**: A fixed, persistent banner positioned at the screen viewport ceiling utilizing `#dc2626` text on `#fef2f2` with an authoritative 1px border in `#f87171`.