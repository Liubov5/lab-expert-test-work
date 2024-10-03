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

const DownloadActDocument = ({ data }: any): any => {
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>
            Акт отбора проб № {data.samplingAct.id}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Наименование организации:</Text>
          <Text style={styles.text}>
            {data.user.company.name ? data.user.company.name : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Наименование объекта:</Text>
          <Text style={styles.text}>
            {data.researchObjects.name
              ? data.researchObjects.name
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Место отбора проб:</Text>
          <Text style={styles.text}>
            {data.samplingLocation ? data.samplingLocation : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Объект контроля:</Text>
          <Text style={styles.text}>
            {data.objectControl ? data.objectControl : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Дата отбора проб:</Text>
          <Text style={styles.text}>
            {data.samplingAct.samplingDate
              ? data.samplingAct.samplingDate
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Время отбора проб:</Text>
          <Text style={styles.text}>
            {data.samplingAct.samplingTime
              ? data.samplingAct.samplingTime
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Наименование материала:</Text>
          <Text style={styles.text}>
            {data.samplingAct.materialName
              ? data.samplingAct.materialName
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Количество образцов:</Text>
          <Text style={styles.text}>
            {data.samplingAct.samplingQuantity
              ? data.samplingAct.samplingQuantity
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Документ о качестве:</Text>
          <Text style={styles.text}>
            {data.samplingAct.qualityDocument
              ? data.samplingAct.qualityDocument
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Ответственное лицо:</Text>
          <Text style={styles.text}>
            {data.samplingAct.respUser
              ? data.samplingAct.respUser
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Примечание:</Text>
          <Text style={styles.text}>
            {data.samplingAct.note ? data.samplingAct.note : 'Не заполнено'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Условия окружающей среды:</Text>
          <Text style={styles.text}>
            {data.samplingAct.environmental
              ? data.samplingAct.environmental
              : 'Не заполнено'}
          </Text>
        </View>
        <View style={[styles.section, { marginTop: '100px' }]}>
          <Text style={styles.text}>Фамилия: ________________</Text>
          <Text style={styles.text}>Подпись: ________________</Text>
        </View>
      </Page>
    </Document>
  )
}

export default DownloadActDocument
