import React from 'react'
import ReactPDF, {
  Page,
  Text,
  View,
  Font,
  Document,
  StyleSheet,
} from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
import { useLocation } from 'react-router-dom'
import { CCol, CRow } from '@coreui/react-pro'
import { getDateV1 } from '../../helper/getDate'

Font.register({
  family: 'RobotoLight',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
})
Font.register({
  family: 'RobotoMedium',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'RobotoLight',
    padding: '20px',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
  },
  text: {
    fontWeight: 100,
    fontSize: '12px',
    width: '300px',
  },
  title: {
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'RobotoMedium',
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
  },
})

const DownloadCommentsDocument = ({ data }: any): any => {
  console.log(data)
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>
            Комментарии к заявке № {data.orderId}
          </Text>
        </View>
        {data.comments.map((comment: any) => {
          return (
            <View key={comment.id} style={styles.section}>
              <View style={styles.text}>
                <Text>
                  {' '}
                  {comment.user.surname +
                    ' ' +
                    comment.user.name[0] +
                    '. ' +
                    comment.user.lastName[0] +
                    '.'}{' '}
                </Text>
                <Text>{getDateV1(comment.createdAt)}</Text>
              </View>
              <View style={styles.text}>
                <Text>{comment.text}</Text>
              </View>
            </View>
          )
        })}
      </Page>
    </Document>
  )
}

export default DownloadCommentsDocument
