import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Download.scss";
import Title from "../Atoms/Title";
import StaticCV from "../Organisms/StaticCV";
import InfoSection from "../Templates/InfoSection";
import Button from "../Atoms/Button";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import {
  CareerEvent,
  ContactMethod,
  Language,
  Profile,
  TechGroup,
} from "../../Types/ApiTypes";
import { selectProfile } from "../../Redux/About/Selectors";
import { selectLanguages } from "../../Redux/Languages/Selectors";
import { selectCareerEvents } from "../../Redux/Career/Selectors";
import { selectContactMethods } from "../../Redux/Contact/Selectors";
import { selectTechnologies } from "../../Redux/Technologies/Selectors";

/**
 * Page where a user can preview
 * and download generated static CV
 *
 * @return {*}  {JSX.Element}
 */
const Download: React.FC = (): JSX.Element => {
  const profile = useSelector(selectProfile);
  const languages = useSelector(selectLanguages);
  const careerEvents = useSelector(selectCareerEvents);
  const contactMethods = useSelector(selectContactMethods);
  const technologies = useSelector(selectTechnologies);

  return (
    <ApiResponseTemplate
      render={() => {
        const staticCv = (
          <StaticCV
            profile={profile.data as Profile}
            languages={languages.data as Language[]}
            careerEvents={careerEvents.data as CareerEvent[]}
            contactMethods={contactMethods.data as ContactMethod[]}
            technologies={technologies.data as TechGroup[]}
          />
        );

        return (
          <>
            <Helmet>
              <title>Download | {profile.data?.nickname ?? ""}</title>
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
        profile.pending ||
        languages.pending ||
        careerEvents.pending ||
        contactMethods.pending ||
        technologies.pending
      }
      error={
        profile.error ||
        languages.error ||
        careerEvents.error ||
        contactMethods.error ||
        technologies.error
      }
    />
  );
};

export default Download;
