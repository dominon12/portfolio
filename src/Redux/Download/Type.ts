export enum DownloadActionTypes {
  LOAD = "DOWNLOAD_LOAD",
}

export type DownloadLoadAction = () => {
  type: DownloadActionTypes.LOAD;
};

export type DownloadAction = ReturnType<DownloadLoadAction>;
