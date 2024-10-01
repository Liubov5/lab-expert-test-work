import printJS from 'print-js'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CCol, CRow } from '@coreui/react-pro'

const PrintActDocument = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [close, setClose] = useState(false)
  useEffect(() => {
    printJS({
      printable: 'toActPrint',
      type: 'html',
      targetStyles: ['*'],
      onPrintDialogClose: () => setClose(true),
    })
  }, [])
  useEffect(() => {
    navigate(`/orders/${state.id}?view=true`)
  }, [close])
  return (
    <div id="toActPrint">
      <CRow>
        <CCol>
          {' '}
          <h4
            style={{ textAlign: 'center', fontSize: '30px', fontWeight: '900' }}
          >
            Акт отбора проб № {state.idAct}
          </h4>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Наименование организации:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>
            {state.legalForm} {state.companyName}
          </p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Наименование объекта:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.objectName}</p>
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
          <p>Объект контроля:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.objectControl}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Дата отбора проб:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.samplingDate}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Время отбора проб:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.samplingTime}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Наименование материала</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.materialName}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Количество образцов:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.samplingQuantity}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Документ о качестве:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.qualityDocument}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Ответственное лицо:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.respUser}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Примечание:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.note}</p>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={2}>
          <p>Условия окружающей среды:</p>
        </CCol>
        <CCol xs={12} sm={3}>
          <p>{state.environmental}</p>
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

export default PrintActDocument
