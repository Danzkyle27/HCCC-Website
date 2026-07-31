import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ToastNotification.css';

const ToastContext = createContext(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ type = 'info', title, message, duration = 5000 }) => {
    const id = Date.now();
    const toast = { id, type, title, message, duration };
    
    setToasts(prev => [...prev, toast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const toast = {
    success: (title, message, duration) => addToast({ type: 'success', title, message, duration }),
    error: (title, message, duration) => addToast({ type: 'error', title, message, duration }),
    info: (title, message, duration) => addToast({ type: 'info', title, message, duration }),
    warning: (title, message, duration) => addToast({ type: 'warning', title, message, duration }),
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="toast-container">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              className={`toast ${toast.type}`}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              layout
            >
              <div className="toast-icon">{icons[toast.type]}</div>
              <div className="toast-content">
                {toast.title && <div className="toast-title">{toast.title}</div>}
                {toast.message && <div className="toast-message">{toast.message}</div>}
              </div>
              <button 
                className="toast-close"
                onClick={() => removeToast(toast.id)}
                aria-label="Close"
              >
                ✕
              </button>
              {toast.duration > 0 && (
                <div 
                  className="toast-progress"
                  style={{ 
                    animationDuration: `${toast.duration}ms`,
                    color: getProgressColor(toast.type)
                  }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function getProgressColor(type) {
  const colors = {
    success: '#22c55e',
    error: '#ef4444',
    info: '#5d7b8f',
    warning: '#f59e0b',
  };
  return colors[type] || colors.info;
}
