import { ToastContainer } from "react-toastify";
import { useTheme } from "../../theme/themeContext";

const CustomToastContainer = () => {
  const { theme } = useTheme();

  return (
    <ToastContainer
      position='top-right'
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
};

export default CustomToastContainer;
