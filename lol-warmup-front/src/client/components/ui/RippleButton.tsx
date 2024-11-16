'use client';

import { useState, useLayoutEffect } from 'react';

interface RippleButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function RippleButton({ children, className = '', onClick }: RippleButtonProps) {
    const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([]);

    useLayoutEffect(() => {
        const timeouts = ripples.map((ripple) => {
            return setTimeout(() => {
                setRipples((prevRipples) =>
                    prevRipples.filter((r) => r.id !== ripple.id)
                );
            }, 1000);
        });

        return () => {
            timeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, [ripples]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setRipples([...ripples, { x, y, id: Date.now() }]);
        
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`relative overflow-hidden ${className}`}
            onClick={handleClick}
        >
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute bg-ripple rounded-full animate-ripple "
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                    }}
                />
            ))}
            {children}
        </button>
    );
}