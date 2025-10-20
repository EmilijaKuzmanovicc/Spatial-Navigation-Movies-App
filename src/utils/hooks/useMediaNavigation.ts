import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { useLocation, useNavigate } from "react-router-dom";

export const useMediaNavigation = (url?: string, id?: string, focusKey?: string) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToMedia = () => {
    navigate(`${url}`, {
      state: {
        from: location.pathname,
        focusKey,
        id,
      },
    });
  };

  const navigateBack = () => {
    navigate(location.state?.from, {
      state: {
        focusKey: location.state?.focusKey,
        returnFromDetails: true,
      } as any,
    });
  };

  const restoreFocus = () => {
    if (location.state?.returnFromDetails && location.state?.focusKey) {
      setFocus(location.state.focusKey);
      navigate(location.pathname, { replace: true, state: {} });
    }
  };

  return {
    navigateToMedia,
    navigateBack,
    restoreFocus,
  };
};
