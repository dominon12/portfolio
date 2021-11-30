import React, { useContext, useEffect, useState } from "react";

import * as serviceWorker from "../../serviceWorkerRegistration";
import {
  SnackBarContext,
  SnackBarMessageColor,
} from "../../Contexts/SnackBarContext";

/**
 * Registers a service worker and
 * passed an update function which will
 * be invoked if there is a new
 * version available.
 *
 * @return {null}
 */
const PWAManager: React.FC = () => {
  const { sendMessage } = useContext(SnackBarContext);

  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    console.log("update");
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  };

  useEffect(() => {
    if (showReload) {
      sendMessage("A new version is available!", {
        color: SnackBarMessageColor.INFO,
      });
    }
  }, [showReload]);

  return null;
};

export default PWAManager;
