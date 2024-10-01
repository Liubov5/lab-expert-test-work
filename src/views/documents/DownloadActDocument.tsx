import React from 'react'
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
import { useLocation } from 'react-router-dom'
import { CCol, CRow } from '@coreui/react-pro'
import { getDateV1 } from '../../helper/getDate'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    height: '800px',
    width: '600px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

// Create Document Component
const DownloadActDocument = () => {
  const { state } = useLocation()
  console.log(state)

  return (
    <PDFViewer>
      <Document>
        <Page
          size={{ width: 595.28, height: 841.89 }}
          orientation="portrait"
          style={styles.page}
        >
          <View style={styles.section}>
            <Text>LOL</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default DownloadActDocument
