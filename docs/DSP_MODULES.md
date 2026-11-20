# SONIQ AI: DIGITAL SIGNAL PROCESSING (DSP) MODULES

Every DSP control in SONIQ AI executes real, verified mathematical audio transformations with zero decorative placeholders.

## 1. 8-Band Parametric Equalizer
- **Cookbook**: Robert Bristow-Johnson Audio EQ Cookbook.
- **Filter Shapes**:
  - High-Pass (12 dB/oct Butterworth)
  - Low-Shelf (Bilinear transformed shelf)
  - Bell / Peaking Filters (4 independent mid bands with Q $\in [0.1, 10.0]$ and Gain $\in [-24, +24]\text{ dB}$)
  - High-Shelf
  - Low-Pass (12 dB/oct Butterworth)

## 2. Dynamic Optical & VCA Compressor
- **Detection**: Linked stereo RMS envelope follower.
- **Ballistics**: Exponential attack ($\alpha_{\text{att}} = e^{-1 / (\tau_{\text{att}} f_s)}$) and release ($\alpha_{\text{rel}} = e^{-1 / (\tau_{\text{rel}} f_s)}$).
- **Soft-Knee Characteristic**: Quadratic transition curve across knee width $W\text{ (dB)}$ to eliminate harsh discontinuities.
- **Makeup Gain**: Linear gain compensation calculated via $10^{G / 20}$.

## 3. Zero-Overshoot Brickwall Limiter
- **Lookahead Buffer**: 5ms lookahead circular buffer delaying audio signal.
- **Gain Envelope**: Instantaneous peak detection with smooth exponential release.
- **Hard Ceiling**: Enforces user-selected ceiling (e.g. $-1.0\text{ dBTP}$ for streaming or $-0.1\text{ dBTP}$ for CD).

## 4. Algorithmic Diffusion Reverb
- **Architecture**: Moorer/Schroeder algorithmic reverb network.
- **Comb Filter Bank**: 4 parallel comb filters with prime delay lengths and low-pass feedback damping.
- **All-Pass Diffusers**: 2 series all-pass filter stages for spatial density.
- **Stereo Spatializer**: Decorrelated early reflections and wet/dry blend matrix.

## 5. Analog Harmonic Saturation
- **Tube Emulation**: Asymmetric transfer function $y = \tanh(0.8x)$ for positive peaks and $0.9\tanh(1.2x)$ for negative peaks, generating rich 2nd-order even harmonics.
- **Tape Emulation**: Symmetric hyperbolic tangent $y = \tanh(x) / \tanh(G)$, introducing soft compression and 3rd-order odd harmonics.
