import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';

interface SimpleNotificationProps {
  title: string;
  message: string;
  type?: 'success' | 'error' | 'info';
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  duration?: number;
}

const SimpleNotification: React.FC<SimpleNotificationProps> = ({
  title,
  message,
  type,
  show,
  setShow,
  duration = 3000, // Default to 3 seconds
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, duration, setShow]);

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <ExclamationCircleIcon aria-hidden="true" className="size-6 text-red-400" />;
      case 'info':
        return <InformationCircleIcon aria-hidden="true" className="size-6 text-blue-400" />;
      case 'success':
      default:
        return <CheckCircleIcon aria-hidden="true" className="size-6 text-green-400" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'error':
        return 'bg-red-50 dark:bg-red-800/30';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-800/30';
      case 'success':
      default:
        return 'bg-green-50 dark:bg-green-800/30';
    }
  };

  return (
    <>
      <div aria-live="assertive" className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition show={show}>
            <div className={`pointer-events-auto w-full max-w-sm rounded-lg ${getBgColor()} shadow-lg outline-1 outline-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0 dark:-outline-offset-1 dark:outline-white/10`}>
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0">{getIcon()}</div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900 dark:text-white text-start">{title}</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{message}</p>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => setShow(false)}
                      className="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 dark:hover:text-white dark:focus:outline-indigo-500"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default SimpleNotification;
