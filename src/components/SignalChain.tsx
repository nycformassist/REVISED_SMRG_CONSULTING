import { Fragment } from 'react';

export interface SignalStage {
  label: string;
  kind?: 'input' | 'step' | 'output' | 'human';
}

interface SignalChainProps {
  stages: SignalStage[];
  className?: string;
}

const CYCLE = 4.2;
const STAGGER = 0.42;

/**
 * SMRG Signal Chain — the visual expression of INFORMATION → INTELLIGENCE → ACTION.
 * Pure CSS motion (no JS loops, no canvas): pulses travel each connector while
 * nodes light in sequence. Vertical on mobile, honors prefers-reduced-motion.
 */
export default function SignalChain({ stages, className }: SignalChainProps) {
  return (
    <div className={`sc-wrap ${className || ''}`} role="img" aria-label={stages.map((s) => s.label).join(' → ')}>
      <div className="sc-row">
        {stages.map((s, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <div className="sc-link" aria-hidden="true">
                <span className="sc-pulse" style={{ animationDelay: `${((i - 1) * STAGGER).toFixed(2)}s` }} />
              </div>
            )}
            <div
              className={`sc-node sc-${s.kind || 'step'}`}
              style={{ animationDelay: `${(i * STAGGER).toFixed(2)}s`, animationDuration: `${CYCLE}s` }}
            >
              {s.label}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/** The master SMRG chain: INFORMATION → INTELLIGENCE → ACTION */
export const MASTER_CHAIN: SignalStage[] = [
  { label: 'INFORMATION', kind: 'input' },
  { label: 'CAPTURE' },
  { label: 'STRUCTURE' },
  { label: 'UNDERSTAND' },
  { label: 'CROSS-REFERENCE' },
  { label: 'CLASSIFY' },
  { label: 'PRIORITIZE' },
  { label: 'INTELLIGENCE', kind: 'output' },
  { label: 'HUMAN ACTION', kind: 'human' },
];

export const PRODUCT_CHAINS: Record<string, SignalStage[]> = {
  rru: [
    { label: 'INQUIRY', kind: 'input' },
    { label: 'CAPTURE' },
    { label: 'STRUCTURE' },
    { label: 'INTELLIGENCE BRIEF', kind: 'output' },
    { label: 'PROFESSIONAL', kind: 'human' },
  ],
  piru: [
    { label: 'PROSPECT', kind: 'input' },
    { label: 'RESEARCH' },
    { label: 'VERIFY' },
    { label: 'SIGNAL DETECTION' },
    { label: 'SALES INTELLIGENCE', kind: 'output' },
  ],
  diru: [
    { label: 'RECORDS', kind: 'input' },
    { label: 'REVIEW' },
    { label: 'CROSS-REFERENCE' },
    { label: 'FINDINGS', kind: 'output' },
    { label: 'PRIORITIES', kind: 'human' },
  ],
  intake: [
    { label: 'INQUIRY', kind: 'input' },
    { label: 'INTAKE' },
    { label: 'STRUCTURE' },
    { label: 'READINESS', kind: 'output' },
    { label: 'PROFESSIONAL REVIEW', kind: 'human' },
  ],
};
