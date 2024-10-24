import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePreventBackNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Pushing  the current path onto the history stack
    console.log(window.location.href)
    window.history.pushState(null, "" , window.location.href);
    

    const preventBackNavigation = (event: PopStateEvent) => {
      // Preventing  back button functionality by pushing the same state again
      window.history.pushState(null, "", window.location.href);
    };

    // Add the event listener for the popstate event (back/forward navigation)
    window.addEventListener("popstate", preventBackNavigation);

    return () => {
      
      window.removeEventListener("popstate", preventBackNavigation);
    };
  }, [navigate]);
};

export default usePreventBackNavigation;
