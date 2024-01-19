"use client";
import React from "react";
import styles from "./InfiniteScrollList.module.css";

const defaultHeight = 224;

/*
 * Creates an infinitely scrolling list.
 * Note that items must have the same height, and be sufficient to cover the total height of the container
 */
export default function InfiniteScrollList<T>({
  items,
  renderItem,
  height = defaultHeight,
}: {
  items: readonly T[];
  renderItem: (item: T) => React.ReactNode;
  height?: number;
}) {
  const animateScrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (animateScrollRef.current == null || height == null) return;
    animateScrollRef.current.style.setProperty(
      "--scroll-container-height",
      `${height}px`,
    );
  }, [animateScrollRef, height]);

  const firstItemRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (firstItemRef.current == null || animateScrollRef.current == null)
      return;
    animateScrollRef.current.style.setProperty(
      "--item-height",
      `${firstItemRef.current.clientHeight}px`,
    );
  }, [firstItemRef, animateScrollRef]);

  // Duplicate first and last item for infinite scroll
  const firstItem = items[0];
  const lastItem = items[items.length - 1];
  if (firstItem == null || lastItem == null) return null;
  const displayItems = [lastItem, ...items, firstItem];

  return (
    <div className={styles.animateScrollContainer} style={{ height }}>
      <div ref={animateScrollRef} className={styles.animateScroll}>
        {displayItems.map((item, index) => (
          <div key={index} ref={index === 0 ? firstItemRef : undefined}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
