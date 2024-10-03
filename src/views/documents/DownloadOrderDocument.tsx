import React from 'react'
import ReactPDF, {
  Page,
  Text,
  View,
  Font,
  Document,
  StyleSheet,
} from '@react-pdf/renderer'

import { getDateV1 } from '../../helper/getDate'
import { backgroundClip } from 'html2canvas/dist/types/css/property-descriptors/background-clip'

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
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingBottom: '50px',
    paddingTop: '50px',
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 1,
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
  },
  textBlockLeft: {
    width: '100px',
  },
  textBlockRight: {
    flex: 1,
  },
  textProperty: {
    fontSize: '12px',
  },
  textValue: {
    fontFamily: 'RobotoMedium',
    fontSize: '12px',
  },
  infoBlockLeft: {
    flex: 1,
  },
  infoBlockRight: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    rowGap: 5,
  },
  titleBlock: {
    marginTop: '20px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  titleBlockText: {
    fontSize: '16px',
    fontFamily: 'RobotoMedium',
  },
  description: {
    display: 'flex',
    fontSize: '12px',
    marginBottom: '10px',
    flexDirection: 'row',
  },
  descriptionProperty: {
    width: '200px',
  },
  descriptionValue: {
    flex: 1,
  },
})

const DownloadOrderDocument = ({ data }: any): any => {
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.infoBlock}>
          <View style={styles.infoBlockLeft}>
            <View style={styles.textBlock}>
              <View style={styles.textBlockLeft}>
                <Text style={styles.textProperty}>Контрагент:</Text>
              </View>
              <View style={styles.textBlockRight}>
                <Text style={styles.textValue}>
                  {data.user.company.legalForm} «{data.user.company.name}»
                </Text>
              </View>
            </View>
            <View style={styles.textBlock}>
              <View style={styles.textBlockLeft}>
                <Text style={styles.textProperty}>Заявку составил:</Text>
              </View>
              <View style={styles.textBlockRight}>
                <Text style={styles.textValue}>
                  {data.user.surname +
                    ' ' +
                    data.user.name[0] +
                    '. ' +
                    data.user.lastName[0] +
                    '.'}
                </Text>
              </View>
            </View>
            <View style={styles.textBlock}>
              <View style={styles.textBlockLeft}>
                <Text style={styles.textProperty}>Телефон составителя:</Text>
              </View>
              <View style={styles.textBlockRight}>
                <Text style={styles.textValue}>{data.user.phone}</Text>
              </View>
            </View>
            <View style={styles.textBlock}>
              <View style={styles.textBlockLeft}>
                <Text style={styles.textProperty}>Ответственный:</Text>
              </View>
              <View style={styles.textBlockRight}>
                <Text style={styles.textValue}>
                  {data.responsibleUser.surname +
                    ' ' +
                    data.responsibleUser.name[0] +
                    '. ' +
                    data.responsibleUser.lastName[0] +
                    '.'}
                </Text>
              </View>
            </View>
            <View style={styles.textBlock}>
              <View style={styles.textBlockLeft}>
                <Text style={styles.textProperty}>Телефон исполнителя:</Text>
              </View>
              <View style={styles.textBlockRight}>
                <Text style={styles.textValue}>
                  {data.responsibleUser.phone}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBlockRight}>
            <Text style={styles.textProperty}>Генеральному директору </Text>
            <Text style={styles.textValue}>
              {data.responsibleUser.company.legalForm} «
              {data.responsibleUser.company.name}»
            </Text>
            <Text style={styles.textValue}>
              {data.responsibleUser.surname +
                ' ' +
                data.responsibleUser.name[0] +
                '. ' +
                data.responsibleUser.lastName[0] +
                '.'}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.titleBlock}>
            <Text style={styles.titleBlockText}>
              Заявка № {data.id} от {getDateV1(data.createdAt)}
            </Text>
          </View>
          <View style={{ marginBottom: '30px' }}>
            <Text style={styles.textProperty}>
              Прошу провести испытания по ниже указанным параметрам:
            </Text>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Дата проведения испытаний:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>
                {data.testDate ? getDateV1(data.testDate) : 'Не заполнено'}
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Время проведения испытаний:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>{data.testTime ? data.testTime : 'Не заполнено'}</Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Виды работ:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>{data.typeJob ? data.typeJob : 'Не заполнено'}</Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Объект строительства:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>
                {data.researchObjects.name
                  ? data.researchObjects.name
                  : 'Не заполнено'}
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Объект контроля:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>
                {data.objectControl ? data.objectControl : 'Не заполнено'}
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Место отбора проб:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>
                {data.samplingLocation ? data.samplingLocation : 'Не заполнено'}
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Проект:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>{data.name ? data.name : 'Не заполнено'}</Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.descriptionProperty}>
              <Text>Краткая информация:</Text>
            </View>
            <View style={styles.descriptionValue}>
              <Text>
                {data.description ? data.description : 'Не заполнено'}
              </Text>
            </View>
          </View>
          {data.samplingAct ? (
            <View style={styles.description}>
              <View style={styles.descriptionProperty}>
                <Text style={{ fontFamily: 'RobotoMedium' }}>Приложение:</Text>
              </View>
              <View style={styles.descriptionValue}>
                <Text style={{ fontFamily: 'RobotoMedium' }}>
                  Акт отбора проб №{data.samplingAct.id}
                </Text>
              </View>
            </View>
          ) : (
            ' '
          )}
          <View
            style={[
              styles.description,
              { marginTop: '100px', justifyContent: 'space-between' },
            ]}
          >
            <Text>Фамилия: ________________</Text>
            <Text>Подпись: ________________</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default DownloadOrderDocument
