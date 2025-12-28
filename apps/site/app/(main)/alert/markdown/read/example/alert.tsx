import React from 'react';

import { IconErrorLine, IconInfoLine, IconSuccessLine, IconWarningLine } from '@condev-ui/ui';

import './alert.css';

import { cn } from '../../../../../_components/_utils'

export interface AlertProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
  type?: 'default' | 'success' | 'warning' | 'error';
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ title, message, type = 'default', icon, onClose }) => {
  return (
    <div
      className={cn('alert', {
        'alert-default': type === 'default',
        'alert-success': type === 'success',
        'alert-warning': type === 'warning',
        'alert-error': type === 'error',
      })}
    >
      <div className="alert-content-wrapper">
        <span
          className={cn('alert-icon', {
            'alert-icon-default': type === 'default',
            'alert-icon-success': type === 'success',
            'alert-icon-warning': type === 'warning',
            'alert-icon-error': type === 'error',
            'alert-icon-only-title': !message,
          })}
        >
          {icon}
          {type === 'default' && !icon && <IconInfoLine />}
          {type === 'success' && !icon && <IconSuccessLine />}
          {type === 'warning' && !icon && <IconWarningLine />}
          {type === 'error' && !icon && <IconErrorLine />}
        </span>
        <div className="alert-content">
          <div>{title}</div>
          <p>{message}</p>
        </div>
      </div>
      <div>
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};
