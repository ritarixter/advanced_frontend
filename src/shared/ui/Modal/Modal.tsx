import { FC, ReactNode, MouseEvent, useState, useRef, useEffect, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';


interface IModal {
  className?: string;
  children?: ReactNode;
  isOpen?:boolean;
  onClose?: ()=>void;
}

const ANIMATION_DELAY = 150;
export const Modal: FC<IModal> = ({ className, children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }


    const closeHandler = useCallback(()=> {
        if(onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(()=>{
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY)
        }
    },[onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])


    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(()=>{
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    },[isOpen, onKeyDown])

    return(
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content}
                        onClick={onContentClick}>{children} </div>
                </div>
            </div>
        </Portal>
    )};
