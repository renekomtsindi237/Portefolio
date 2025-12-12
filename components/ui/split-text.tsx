'use client';

import { useEffect, useRef, ElementType } from 'react';
import { gsap } from 'gsap';
import './split-text.css';

interface SplitTextProps {
    text: string;
    as?: ElementType;
    className?: string;
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    yOffset?: number;
    [key: string]: any;
}

const SplitText = ({
    text,
    as: Component = 'span',
    className = '',
    duration = 0.8,
    stagger = 0.03,
    delay = 0,
    ease = 'power3.out',
    yOffset = 20,
    ...props
}: SplitTextProps) => {
    const containerRef = useRef<HTMLElement>(null);

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
        <Component ref={containerRef} className={`split-text ${className}`} {...props}>
            {chars}
        </Component>
    );
};

export default SplitText;
