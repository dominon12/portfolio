// import React, { useEffect, useState } from "react";

// import * as serviceWorker from "../../serviceWorker";

// const UpdateManager: React.FC = () => {
//   const [showReload, setShowReload] = useState(false);
//   const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
//     null
//   );

//   const onSWUpdate = (registration: ServiceWorkerRegistration) => {
//     setShowReload(true);
//     setWaitingWorker(registration.waiting);
//   };

//   useEffect(() => {
//     serviceWorker.register({ onUpdate: onSWUpdate });
//   }, []);

//   return null;
// };

// export default UpdateManager;
export {}