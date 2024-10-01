import React, { useEffect, useState } from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import { CCol, CRow } from '@coreui/react-pro'
import { getDateV1 } from '../../helper/getDate'
import printJS from 'print-js'

const PrintOrderDocument = ({}: any): any => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [close, setClose] = useState(false)
  useEffect(() => {
    printJS({
      printable: 'toPrint',
      type: 'html',
      targetStyles: ['*'],
      onPrintDialogClose: () => setClose(true),
    })
  }, [])
  useEffect(() => {
    navigate(`/orders/${state.id}?view=true`)
  }, [close])

  return (
    <div id="toPrint">
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Контрагент:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.user.company.name}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Завяку составил:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>
            {state.user.surname +
              ' ' +
              state.user.name[0] +
              '. ' +
              state.user.lastName[0] +
              '.'}
          </p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Телефон составителя:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.user.phone}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Ответственный:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>
            {state.responsibleUser.surname +
              ' ' +
              state.responsibleUser.name[0] +
              '. ' +
              state.responsibleUser.lastName[0] +
              '.'}
          </p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Телефон исполнителя:</p>
        </CCol>
        <CCol xs={12} sm={4}>
          <p>{state.responsibleUser.phone}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <h4
            style={{ textAlign: 'center', fontSize: '30px', fontWeight: '900' }}
          >
            Заявка № {state.id} от {getDateV1(state.createdAt)}
          </h4>
        </CCol>
      </CRow>
      <CRow>
        <p>Прошу провести испытания по ниже указанным параметрам: </p>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Дата проведения испытаний:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{getDateV1(state.testDate)}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Время проведения испытаний:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.testTime}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Виды работ:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.typeJob}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Объект строительства: </p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.researchObjects.name}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Объект контроля:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.objectControl}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Место отбора проб:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.samplingLocation}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Проект: </p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.name}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Краткая информацция</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.description}</p>
        </CCol>
      </CRow>
      <div style={{ marginTop: '50px' }}>
        <CRow>
          <CCol>Фамилия:________________</CCol>
          <CCol>Подпись:________________</CCol>
        </CRow>
      </div>
    </div>
  )
}

export default React.memo(PrintOrderDocument)
