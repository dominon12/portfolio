import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Helmet } from "react-helmet";

import "./Download.scss";
import Title from "../Atoms/Title";
import StaticCV from "../Organisms/StaticCV";
import InfoSection from "../Templates/InfoSection";
import Button from "../Atoms/Button";

/**
 * Page where a user can preview 
 * and download generated static CV 
 *
 * @return {*}  {JSX.Element}
 */
const Download: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Download | Dominon12</title>
        <meta
          name="description"
          content="Need a static version of this website? Just click the download button and you will get it."
        />
      </Helmet>
      <InfoSection
        containerClassName="download__container"
        left={
          <>
            <Title className="download__title">Static CV</Title>
            <p className="download__description">
              If you need a static pdf document of my Curriculum Vitae, you can
              download it here by clicking on the button below. It's being
              generated from the same data source that this website uses.
            </p>
            <PDFDownloadLink
              document={<StaticCV />}
              fileName={"MaksimSobolevCV"}
            >
              <Button type="primary" onClick={() => {}}>
                Download
              </Button>
            </PDFDownloadLink>
          </>
        }
        leftContainerClassName="download__container_left"
        right={
          <PDFViewer className="download__preview">
            <StaticCV />
          </PDFViewer>
        }
        rightContainerClassName="download__container_right"
      />
    </>
  );
};

export default Download;
