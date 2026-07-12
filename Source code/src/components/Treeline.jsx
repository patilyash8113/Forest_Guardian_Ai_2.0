// Signature illustration: a hand-built layered treeline silhouette.
// Used across the site (hero backdrop, section dividers) so the brand
// has one consistent, recognizable visual mark instead of stock photography.
export default function Treeline({ className = '', variant = 'dark' }) {
  const fills =
    variant === 'dark'
      ? { back: '#122f24', mid: '#173f30', front: '#0b1f18' }
      : { back: '#d6e8d8', mid: '#aed0b3', front: '#7fb389' };

  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {/* back ridge */}
      <path
        fill={fills.back}
        d="M0 160 L60 120 L110 150 L170 90 L230 140 L300 100 L360 150 L430 110 L500 160 L560 120 L630 150 L700 95 L760 150 L830 110 L900 160 L970 120 L1040 150 L1100 100 L1170 150 L1240 110 L1310 160 L1380 120 L1440 150 L1440 220 L0 220 Z"
        opacity="0.55"
      />
      {/* mid ridge */}
      <path
        fill={fills.mid}
        d="M0 190 L50 160 L100 185 L150 145 L210 180 L270 150 L330 185 L400 155 L470 190 L530 160 L600 185 L660 150 L730 190 L800 160 L870 185 L930 150 L1000 190 L1060 160 L1130 185 L1200 150 L1270 190 L1340 160 L1400 185 L1440 170 L1440 220 L0 220 Z"
        opacity="0.75"
      />
      {/* front ridge, crisp */}
      <path
        fill={fills.front}
        d="M0 210 L40 195 L80 212 L130 190 L180 212 L230 195 L290 215 L350 195 L410 215 L470 198 L530 215 L590 195 L650 215 L710 198 L780 215 L840 195 L900 215 L960 198 L1030 215 L1090 195 L1150 215 L1210 198 L1280 215 L1340 195 L1400 215 L1440 205 L1440 220 L0 220 Z"
      />
    </svg>
  );
}
