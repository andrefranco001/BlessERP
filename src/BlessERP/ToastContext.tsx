import React, { createContext, useContext, useRef, ReactNode } from 'react';
import { IToast } from '../components/Toast';

interface ToastContextProps {
    toastRef: React.RefObject<IToast | null>; // Allow it to be null
}

interface ToastProviderProps {
    children: ReactNode;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const toastRef = useRef<IToast | null>(null); // Initial value can be null

    return (
        <ToastContext.Provider value={{ toastRef }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context.toastRef;
};
