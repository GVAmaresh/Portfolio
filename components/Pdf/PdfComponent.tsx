import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, PDFDownloadLink } from '@react-pdf/renderer';

export const ResumeDocument = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    name: {
      fontSize: 28,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    contact: {
      fontSize: 12,
      marginBottom: 10,
    },
    heading: {
      fontSize: 18,
      marginBottom: 5,
      fontWeight: 'bold',
      borderBottom: '1px solid #000',
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
    link: {
      fontSize: 12,
      color: 'blue',
      textDecoration: 'underline',
      marginTop: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>John Doe</Text> {/* Your Name */}
          <Text style={styles.contact}>Email: john.doe@email.com | Phone: +1 234 567 890</Text> {/* Contact Info */}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Work Experience</Text>
          <Text style={styles.text}>Software Engineer at XYZ Company</Text>
          <Text style={styles.text}>Developed multiple React applications and improved performance by 20%.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.text}>Bachelor of Science in Computer Science, ABC University</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.text}>- JavaScript, React, Node.js, MongoDB</Text>
          <Text style={styles.text}>- HTML, CSS, TypeScript, Git</Text>
        </View>

        <View style={styles.section}>
          <Link style={styles.link} src="https://yourwebsite.com/resume.pdf">
            Download My Resume
          </Link> {/* Link to Resume or Portfolio */}
        </View>
      </Page>
    </Document>
  );
};

// export default function PdfComponent() {
//   return (
//     <div>
//       <PDFDownloadLink document={<ResumeDocument />} fileName="John_Doe_Resume.pdf">
//         {({ loading }) => (
//           <span>{loading ? 'Generating PDF...' : 'Download My Resume'}</span>
//         )}
//       </PDFDownloadLink>
//     </div>
//   );
// }
