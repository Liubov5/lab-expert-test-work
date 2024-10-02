import printJS from 'print-js'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
      <div>
        <div>
          <h4
            style={{
              textAlign: 'center',
              fontSize: '30px',
              fontWeight: '900',
              marginBottom: '50px',
            }}
          >
            Акт отбора проб № {state.idAct}
          </h4>
        </div>
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
        <div>
          <p>
            {state.legalForm} «{state.companyName}»
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Наименование объекта:</p>
        </div>
        <div>
          <p>{state.objectName}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Место отбора проб:</p>
        </div>
        <div>
          <p>{state.samplingLocation}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Объект контроля:</p>
        </div>
        <div>
          <p>{state.objectControl}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Дата отбора проб:</p>
        </div>
        <div>
          <p>{state.samplingDate}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Время отбора проб:</p>
        </div>
        <div>
          <p>{state.samplingTime}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Наименование материала</p>
        </div>
        <div>
          <p>{state.materialName}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Количество образцов:</p>
        </div>
        <div>
          <p>{state.samplingQuantity}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Документ о качестве:</p>
        </div>
        <div>
          <p>{state.qualityDocument}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Ответственное лицо:</p>
        </div>
        <div>
          <p>{state.respUser}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Примечание:</p>
        </div>
        <div>
          <p>{state.note}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Условия окружающей среды:</p>
        </div>
        <div>
          <p>{state.environmental}</p>
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
