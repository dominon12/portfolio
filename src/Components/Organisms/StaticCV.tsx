import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

import {
  getAbout,
  getContactLinks,
  getExperience,
  getLanguages,
  getSkills,
} from "../../Services/DataService";

const StaticCV: React.FC = () => {
  const styles = StyleSheet.create({
    page: {
      padding: "16px",
    },
    title: {
      fontSize: 32,
      marginBottom: 6,
    },
    subtitle: {
      textTransform: "uppercase",
      fontSize: 12,
      letterSpacing: 3,
      marginBottom: 10,
    },
    subHeading: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 4,
    },
    textSecondary: {
      fontSize: 10,
      fontWeight: "light",
      marginBottom: 6,
    },
    text: {
      fontSize: 10,
      lineHeight: 1.3,
    },
    link: {
      fontSize: 10,
      textDecoration: "none",
      marginBottom: 6,
      color: "#ff8e3c",
    },
    section: {
      marginBottom: 10,
    },
  });

  const about = getAbout();
  const languages = getLanguages();
  const experience = getExperience().filter(
    (careerEvent) => careerEvent.isRelevant
  );
  const contactLinks = getContactLinks();
  const skills = getSkills();

  const fullName = `${about.firstName} ${about.lastName}`;

  const header = () => {
    const headerStyles = StyleSheet.create({
      header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom: 0.5,
        paddingBottom: 16,
      },
      profileImage: {
        width: "100",
        height: "100",
        borderRadius: "100",
      },
    });
    return (
      <View style={headerStyles.header}>
        <View>
          <Text style={styles.title}>{fullName}</Text>
          <Text style={[styles.subtitle, styles.link]}>{about.jobTitle}</Text>
        </View>
        <Image src={about.image} style={headerStyles.profileImage} />
      </View>
    );
  };

  const aboutSection = () => (
    <View style={styles.section}>
      <Text style={styles.subtitle}>About</Text>
      <Text style={styles.text}>{about.cvDescription}</Text>
    </View>
  );

  const contactSection = () => {
    const contactStyles = StyleSheet.create({
      linksContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    });

    return (
      <View style={[styles.section, { marginTop: "auto" }]}>
        <Text style={styles.subtitle}>
          Contact me {String.fromCharCode(8986)}
        </Text>
        <View style={contactStyles.linksContainer}>
          {contactLinks.map((link) => (
            <Link src={link.url} style={styles.link}>
              {link.name}
            </Link>
          ))}
        </View>
      </View>
    );
  };

  const languagesSection = () => {
    const languagesStyles = StyleSheet.create({
      container: {
        flexDirection: "row",
        marginBottom: 6,
      },
      image: { width: 16, height: 12, marginRight: 10 },
    });

    return (
      <View style={styles.section}>
        <Text style={styles.subtitle}>Languages</Text>
        {languages.map((lang) => (
          <View style={languagesStyles.container}>
            <Image
              src={`https://flagcdn.com/16x12/${lang.code}.png`}
              style={languagesStyles.image}
            />
            <Text style={styles.text}>
              {lang.name}: {lang.level}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const experienceSection = () => {
    const experienceStyles = StyleSheet.create({
      listItem: {
        marginBottom: 16,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
      },
    });
    return (
      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        {experience
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((careerEvent) => (
            <View style={experienceStyles.listItem}>
              <View style={experienceStyles.header}>
                <Text style={styles.subHeading}>• {careerEvent.title}</Text>
                <Text style={styles.text}>
                  {careerEvent.date.toLocaleDateString()}
                </Text>
              </View>
              <Text style={styles.textSecondary}>{careerEvent.place}</Text>
              <Text style={styles.text}>{careerEvent.description}</Text>
            </View>
          ))}
      </View>
    );
  };

  const skillsSection = () => {
    const skillStyles = StyleSheet.create({
      group: {
        marginBottom: 6,
      },
      table: {
        marginTop: 6,
      },
      skill: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
        borderBottom: 0.2,
        paddingBottom: 4,
      },
    });

    return (
      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        {skills.map((skillGroup) => (
          <View style={skillStyles.group}>
            <Text style={styles.subHeading}>{skillGroup.name}</Text>
            <View style={skillStyles.table}>
              {skillGroup.skills
                .sort((a, b) => b.level - a.level)
                .map((skill) => (
                  <View style={skillStyles.skill}>
                    <Text style={styles.text}>{skill.name}</Text>
                    <Text style={styles.text}>{skill.level} / 5</Text>
                  </View>
                ))}
            </View>
          </View>
        ))}
      </View>
    );
  };

  const projectsSection = () => (
    <View style={styles.section}>
      <Text style={styles.subtitle}>Projects</Text>
      <Text style={styles.text}>
        In order to meet my practical experience please visit "Projects" tab on
        my&nbsp;
        <Link src="https://dominon12.web.app/" style={styles.link}>
          personal website
        </Link>
        . &nbsp;There you can find more detailed information with better
        presentation.
      </Text>
    </View>
  );

  const body = () => {
    const bodyStyles = StyleSheet.create({
      container: {
        flexDirection: "row",
        paddingTop: 16,
      },
      leftPart: {
        width: "40%",
        paddingRight: 16,
        borderRight: 0.5,
      },
      rightPart: {
        width: "60%",
        paddingLeft: 16,
      },
    });
    return (
      <View style={bodyStyles.container}>
        <View style={bodyStyles.leftPart}>
          {aboutSection()}
          {languagesSection()}
          {skillsSection()}
        </View>
        <View style={bodyStyles.rightPart}>
          {projectsSection()}
          {experienceSection()}
          {contactSection()}
        </View>
      </View>
    );
  };

  return (
    <Document title={`${fullName}'s CV'`} author={fullName} subject="CV">
      <Page size="A4" style={styles.page}>
        {header()}
        {body()}
      </Page>
    </Document>
  );
};

export default StaticCV;