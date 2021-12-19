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
  CareerEvent,
  ContactMethod,
  Language,
  Profile,
  TechGroup,
} from "../../Types/ApiTypes";

interface Props {
  profile: Profile;
  languages: Language[];
  careerEvents: CareerEvent[];
  contactMethods: ContactMethod[];
  technologies: TechGroup[];
}

/**
 * Renders a static pdf document - CV
 *
 * @return {*}  {JSX.Element}
 */
const StaticCV: React.FC<Props> = ({
  profile,
  languages,
  careerEvents,
  contactMethods,
  technologies,
}): JSX.Element => {
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

  const fullName = `${profile.firstName} ${profile.lastName}`;

  /**
   * Renders header
   *
   * @return {*}  {JSX.Element}
   */
  const header = (): JSX.Element => {
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
          <Text style={[styles.subtitle, styles.link]}>{profile.jobTitle}</Text>
        </View>
        <Image src={profile.photo.src} style={headerStyles.profileImage} />
      </View>
    );
  };

  /**
   * Renders profile section
   *
   * @return {*}  {JSX.Element}
   */
  const profileSection = (): JSX.Element => (
    <View style={styles.section}>
      <Text style={styles.subtitle}>profile</Text>
      <Text style={styles.text}>{profile.cvDescription}</Text>
    </View>
  );

  /**
   * Renders a section with contact info
   *
   * @return {*}  {JSX.Element}
   */
  const contactSection = (): JSX.Element => {
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
          {contactMethods.map((contactMethod) => (
            <Link
              key={contactMethod.pk}
              src={contactMethod.link}
              style={styles.link}
            >
              {contactMethod.name}
            </Link>
          ))}
        </View>
      </View>
    );
  };

  /**
   * Renders section with info
   * profile languages
   *
   * @return {*}  {JSX.Element}
   */
  const languagesSection = (): JSX.Element => {
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
          <View key={lang.pk} style={languagesStyles.container}>
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

  /**
   * Renders a section with info
   * profile an experience
   *
   * @return {*}  {JSX.Element}
   */
  const experienceSection = (): JSX.Element => {
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
        {careerEvents.map((careerEvent) => (
          <View key={careerEvent.pk} style={experienceStyles.listItem}>
            <View style={experienceStyles.header}>
              <Text style={styles.subHeading}>• {careerEvent.title}</Text>
              <Text style={styles.text}>
                {new Date(careerEvent.date).toLocaleDateString()}
              </Text>
            </View>
            <Text style={styles.textSecondary}>{careerEvent.place}</Text>
            <Text style={styles.text}>{careerEvent.description}</Text>
          </View>
        ))}
      </View>
    );
  };

  /**
   * Renders a section with a table
   * of skills
   *
   * @return {*}  {JSX.Element}
   */
  const skillsSection = (): JSX.Element => {
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
      relevantSkill: {
        backgroundColor: "#ff8e3c",
        color: "white",
      },
    });

    return (
      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        {technologies.map((skillGroup) => (
          <View key={skillGroup.pk} style={skillStyles.group}>
            <Text style={styles.subHeading}>{skillGroup.name}</Text>
            <View style={skillStyles.table}>
              {skillGroup.skills
                .sort((a, b) => b.level - a.level)
                .map((skill) => (
                  <View
                    key={skill.pk}
                    style={
                      skill.isRelevant
                        ? {
                            ...skillStyles.skill,
                            ...skillStyles.relevantSkill,
                          }
                        : skillStyles.skill
                    }
                  >
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

  /**
   * Renders a section with info profile projects
   *
   * @return {*}  {JSX.Element}
   */
  const projectsSection = (): JSX.Element => (
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

  /**
   * Combines CV section's and renders them
   *
   * @return {*}  {JSX.Element}
   */
  const body = (): JSX.Element => {
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
          {profileSection()}
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
