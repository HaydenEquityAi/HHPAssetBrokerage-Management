import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}

export const AnimatedCard = ({ 
  children, 
  delay = 0, 
  distance = 20,
  className = '' 
}: AnimatedCardProps) => {
  const { ref, style } = useScrollAnimation({ 
    delay, 
    distance,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div 
      ref={ref} 
      style={{
        ...style,
        width: '100%',
        height: '100%',
        contain: 'layout style paint',
      }}
      className={className}
      data-scroll-animated
    >
      {children}
    </div>
  );
};

