import { DownloadActionTypes, DownloadLoadAction } from "./Type";

export const loadDownloadData: DownloadLoadAction = () => ({
  type: DownloadActionTypes.LOAD,
});
