import { forwardRef } from "react";

const IconButton = forwardRef(
  (
    { icon: Icon, label, onClick, className = "", isLoading = false, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`
          relative p-2 rounded-full 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
          transition-all duration-200 ease-in-out
          hover:bg-gray-100 dark:hover:bg-gray-700
          ${className}
        `}
        aria-label={label}
        title={label}
        disabled={isLoading}
        {...props}
      >
        {Icon && (
          <Icon
            className={`w-5 h-5 ${
              isLoading ? "text-gray-700 dark:text-gray-200" : ""
            }`}
          />
        )}
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-gray-300 border-t-purple-500 rounded-full animate-spin" />
        ) : (
          <Icon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
