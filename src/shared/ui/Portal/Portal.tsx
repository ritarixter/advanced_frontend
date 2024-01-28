import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: ReactNode;
  element?: HTMLElement
}
export const Portal: FC<IPortal> = ({ children, element = document.body }) => (
    createPortal(children, element)
);
