import { toast } from "react-toastify";

const defaultOptions = {
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const ToastService = {
  success: (message, options = {}) => {
    toast.dismiss();
    toast.success(message, {
      position: "top-center",
      ...defaultOptions,
      ...options,
    });
  },

  error: (message, options = {}) => {
    toast.dismiss();
    toast.error(message, {
      position: "top-center",
      ...defaultOptions,
      ...options,
    });
  },

  info: (message, options = {}) => {
    toast.dismiss();
    toast.info(message, {
      position: "top-center",
      ...defaultOptions,
      ...options,
    });
  },

  warning: (message, options = {}) => {
    toast.dismiss();
    toast.warn(message, {
      position: "top-center",
      ...defaultOptions,
      ...options,
    });
  },
};

export default ToastService;
