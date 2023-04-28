import React, { ReactNode } from 'react';
import styles from './textarea.module.scss';

export type TextareaProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Textarea({ children }: TextareaProps) {
  return (
    <div>
      {children}
      <textarea
        rows={10}
        cols={30}
        className={styles.textarea}
        placeholder="Enter text"
      />
    </div>
  );
}
