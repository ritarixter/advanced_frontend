import { FC, ReactNode, MouseEvent, useState, useRef, useEffect, useCallback, MutableRefObject } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';


interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?:boolean;
  onClose?: ()=>void;
  lazy?:boolean
}

const ANIMATION_DELAY = 150;
export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    useEffect(()=>{
        if(isOpen) setIsMounted(true)
    },[isOpen])

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
    
    if(lazy && !isMounted){
        return null
    }

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
