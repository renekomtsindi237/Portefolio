'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './split-text.css';

interface SplitTextProps {
    text: string;
    className?: string;
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    yOffset?: number;
}

const SplitText = ({
    text,
    className = '',
    duration = 0.8,
    stagger = 0.03,
    delay = 0,
    ease = 'power3.out',
    yOffset = 20,
}: SplitTextProps) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const chars = containerRef.current.querySelectorAll('.split-text__char');

        gsap.fromTo(
            chars,
            {
                opacity: 0,
                y: yOffset,
            },
            {
                opacity: 1,
                y: 0,
                duration,
                stagger,
                delay,
                ease,
            }
        );
    }, [text, duration, stagger, delay, ease, yOffset]);

    const chars = text.split('').map((char, index) => (
        <span key={index} className="split-text__char">
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));

    return (
        <span ref={containerRef} className={`split-text ${className}`}>
            {chars}
        </span>
    );
};

export default SplitText;
