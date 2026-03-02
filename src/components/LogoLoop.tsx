import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  useCustomRender?: boolean;
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  width = '100%',
  logoHeight = 60,
  gap = 60,
  pauseOnHover = false,
  hoverSpeed = 0,
  fadeOut = false,
  fadeOutColor = '#000000',
  scaleOnHover = false,
  ariaLabel,
  className,
}: LogoLoopProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate duration based on speed and content width
  // This is a simplified estimation. For a perfect loop, we'd measure content width.
  // Assuming average logo width + gap
  const duration = (logos.length * (logoHeight + gap)) / speed;

  const isVertical = direction === 'up' || direction === 'down';
  const isReverse = direction === 'right' || direction === 'down';

  const renderLogo = (logo: LogoItem, index: number) => {
    const content = 'node' in logo ? (
      <div className="flex items-center justify-center w-full h-full text-white/80 hover:text-white transition-colors">
        {React.cloneElement(logo.node as React.ReactElement, { size: logoHeight * 0.8 })}
      </div>
    ) : (
      <img
        src={logo.src}
        alt={logo.alt || ''}
        className="object-contain w-full h-full"
        width={logo.width}
        height={logo.height}
      />
    );

    const Wrapper = logo.href ? 'a' : 'div';
    const wrapperProps = logo.href
      ? { href: logo.href, target: '_blank', rel: 'noopener noreferrer', title: logo.title }
      : { title: logo.title };

    return (
      <Wrapper
        key={index}
        {...wrapperProps}
        className={cn(
          "flex items-center justify-center transition-transform duration-300",
          scaleOnHover && "hover:scale-110"
        )}
        style={{
          height: logoHeight,
          width: isVertical ? '100%' : 'auto',
          minWidth: isVertical ? 'auto' : logoHeight, // Ensure square-ish aspect ratio minimum
          marginRight: isVertical ? 0 : gap,
          marginBottom: isVertical ? gap : 0,
        }}
      >
        {content}
      </Wrapper>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        width,
        height: isVertical ? '100%' : logoHeight + 40, // Add some padding
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <>
          <div
            className="absolute top-0 left-0 z-10 pointer-events-none"
            style={{
              width: isVertical ? '100%' : '100px',
              height: isVertical ? '100px' : '100%',
              background: isVertical
                ? `linear-gradient(to bottom, ${fadeOutColor}, transparent)`
                : `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 right-0 z-10 pointer-events-none"
            style={{
              width: isVertical ? '100%' : '100px',
              height: isVertical ? '100px' : '100%',
              background: isVertical
                ? `linear-gradient(to top, ${fadeOutColor}, transparent)`
                : `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div
        className={cn("flex", isVertical ? "flex-col" : "flex-row")}
        style={{
          width: isVertical ? '100%' : 'max-content',
          animation: `scroll-${direction} ${duration}s linear infinite`,
          animationPlayState: (pauseOnHover && isHovered) || (hoverSpeed === 0 && isHovered) ? 'paused' : 'running',
        }}
      >
        {/* Render logos twice to create seamless loop */}
        {logos.map(renderLogo)}
        {logos.map((logo, i) => renderLogo(logo, i + logos.length))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
