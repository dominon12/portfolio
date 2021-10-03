import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import "./Download.scss";
import Title from "../Atoms/Title";
import StaticCV from "../Organisms/StaticCV";
import InfoSection from "../Organisms/InfoSection";
import Button from "../Atoms/Button";

const Download: React.FC = () => {
  return (
    <InfoSection
      containerClassName="download__container"
      left={
        <>
          <Title className="download__title">Static CV</Title>
          <p className="download__description">
            If you need a static pdf document of my CV, you can download it here
            by clicking on the button below. It's being generated from the same
            data source that this website uses.
          </p>
          <PDFDownloadLink document={<StaticCV />} fileName={"MaksimSobolevCV"}>
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
  );
};

export default Download;
