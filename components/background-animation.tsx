'use client';

import dynamic from 'next/dynamic';

const Antigravity = dynamic(() => import('@/components/ui/antigravity'), {
    ssr: false,
    loading: () => null
});

export function BackgroundAnimation() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        >
            <Antigravity
                count={300}
                magnetRadius={6}
                ringRadius={7}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={1.5}
                lerpSpeed={0.05}
                color={'#FF9FFC'}
                autoAnimate={true}
                particleVariance={1}
            />
        </div>
    );
}
