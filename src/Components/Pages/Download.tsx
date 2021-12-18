import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Download.scss";
import Title from "../Atoms/Title";
import StaticCV from "../Organisms/StaticCV";
import InfoSection from "../Templates/InfoSection";
import Button from "../Atoms/Button";
import { RootState } from "../../Redux/Types";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import {
  CareerEvent,
  ContactMethod,
  Language,
  Profile,
  TechGroup,
} from "../../Types/ApiTypes";

/**
 * Page where a user can preview
 * and download generated static CV
 *
 * @return {*}  {JSX.Element}
 */
const Download: React.FC = (): JSX.Element => {
  const { about, languages, career, contact, technologies } = useSelector(
    (state: RootState) => ({
      about: state.about,
      languages: state.languages,
      career: state.career,
      contact: state.contact,
      technologies: state.technologies,
    })
  );

  return (
    <ApiResponseTemplate
      render={() => {
        const staticCv = (
          <StaticCV
            about={about.data as Profile}
            languages={languages.data as Language[]}
            careerEvents={career.data as CareerEvent[]}
            contactMethods={contact.data as ContactMethod[]}
            technologies={technologies.data as TechGroup[]}
          />
        );

        return (
          <>
            <Helmet>
              <title>Download | {about.data?.nickname ?? ""}</title>
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
                    If you need a static pdf document of my Curriculum Vitae,
                    you can download it here by clicking on the button below.
                    It's being generated from the same data source that this
                    website uses.
                  </p>
                  <PDFDownloadLink
                    document={staticCv}
                    fileName={"MaksimSobolevCV"}
                    className="download__link"
                  >
                    <Button type="primary" onClick={() => {}}>
                      Download
                    </Button>
                  </PDFDownloadLink>
                </>
              }
              leftContainerClassName="download__container_left"
              right={
                <PDFViewer className="download__preview">{staticCv}</PDFViewer>
              }
              rightContainerClassName="download__container_right"
            />
          </>
        );
      }}
      pending={
        about.pending ||
        languages.pending ||
        career.pending ||
        contact.pending ||
        technologies.pending
      }
      error={
        about.error ||
        languages.error ||
        career.error ||
        contact.error ||
        technologies.error
      }
    />
  );
};

export default Download;
