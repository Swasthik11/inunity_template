import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = e => { pos.current.x = e.clientX; pos.current.y = e.clientY; };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const animate = () => {
      const { x, y, cx, cy } = pos.current;
      pos.current.cx = cx + (x - cx) * 0.16;
      pos.current.cy = cy + (y - cy) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.cx + 'px';
        dotRef.current.style.top  = pos.current.cy + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Hover detection
    const targets = 'a, button, input, select, textarea, [data-hover]';
    const addHover = e => { if (e.target.closest(targets)) setHovering(true); };
    const removeHover = e => { if (e.target.closest(targets)) setHovering(false); };
    document.addEventListener('mouseover',  addHover);
    document.addEventListener('mouseout',   removeHover);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseover', addHover);
      document.removeEventListener('mouseout',  removeHover);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className={`${styles.dot} ${hovering ? styles.hover : ''} ${clicking ? styles.click : ''}`}
    />
  );
}
