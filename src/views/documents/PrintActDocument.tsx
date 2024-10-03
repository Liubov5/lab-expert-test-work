import printJS from 'print-js'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PrintActDocument = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [close, setClose] = useState(false)
  console.log(state)

  useEffect(() => {
    printJS({
      printable: 'toActPrint',
      type: 'html',
      targetStyles: ['*'],
      onPrintDialogClose: () => setClose(true),
    })
  }, [])

  useEffect(() => {
    navigate(`/orders/${state.info.id}?view=true`)
  }, [close])

  return (
    <div id="toActPrint" style={{ color: 'black', fontSize: '12px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h4
          style={{
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: '900',
          }}
        >
          Акт отбора проб № {state.actDetail.id}
        </h4>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Наименование организации:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.info.legalForm} «{state.info.companyName}»
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Наименование объекта:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.info.objectName ? state.info.objectName : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Место отбора проб:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.info.samplingLocation
              ? state.info.samplingLocation
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Объект контроля:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.info.objectControl
              ? state.info.objectControl
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Дата отбора проб:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.actDetail.samplingDate
              ? state.actDetail.samplingDate
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Время отбора проб:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.actDetail.samplingTime
              ? state.actDetail.samplingTime
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Наименование материала</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.actDetail.materialName
              ? state.actDetail.materialName
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Количество образцов:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.actDetail.samplingQuantity
              ? state.actDetail.samplingQuantity
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Документ о качестве:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.actDetail.qualityDocument
              ? state.actDetail.qualityDocument
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Ответственное лицо:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.actDetail.respUser
              ? state.actDetail.respUser
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Примечание:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>{state.actDetail.note ? state.actDetail.note : 'Не заполнено'}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Условия окружающей среды:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.actDetail.environmental
              ? state.actDetail.environmental
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>Фамилия:________________</div>
        <div>Подпись:________________</div>
      </div>
    </div>
  )
}

export default PrintActDocument
