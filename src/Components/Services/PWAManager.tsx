import React, { useContext, useEffect, useState } from "react";

import * as serviceWorker from "../../serviceWorkerRegistration";
import { SnackBarContext } from "../../Contexts/SnackBarContext";

/**
 * Registers a service worker and
 * passes an update callback which will
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

  /**
   * Callback function which will be called if
   * service worker will detect new app version.
   *
   * @param {ServiceWorkerRegistration} registration
   */
  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  /**
   * Register service worker on mount.
   */
  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  /**
   * 'Installs' new version.
   */
  const installNewVersion = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  };

  /**
   * Show snackbar message if there is
   * a new version available.
   */
  useEffect(() => {
    if (showReload) {
      sendMessage("A new version is available!", {
        action: {
          callback: installNewVersion,
          text: "INSTALL",
        },
      });
    }
  }, [showReload]);

  return null;
};

export default PWAManager;
