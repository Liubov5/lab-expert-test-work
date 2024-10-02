import React, { useEffect, useState } from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '30px',
        }}
      >
        <div style={{ width: '300px' }}>
          <p>Контрагент:</p>
        </div>
        <div>
          <p>
            {state.user.company.legalForm} «{state.user.company.name}»
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
          <p>Завяку составил:</p>
        </div>
        <div>
          <p>
            {state.user.surname +
              ' ' +
              state.user.name[0] +
              '. ' +
              state.user.lastName[0] +
              '.'}
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Телефон составителя:</p>
        </div>
        <div>
          <p>{state.user.phone}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Ответственный:</p>
        </div>
        <div>
          <p>
            {state.responsibleUser.surname +
              ' ' +
              state.responsibleUser.name[0] +
              '. ' +
              state.responsibleUser.lastName[0] +
              '.'}
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Телефон исполнителя:</p>
        </div>
        <div>
          <p>{state.responsibleUser.phone}</p>
        </div>
      </div>
      <div>
        <h4
          style={{
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: '900',
            marginBottom: '50px',
          }}
        >
          Заявка № {state.id} от {getDateV1(state.createdAt)}
        </h4>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <p>Прошу провести испытания по ниже указанным параметрам: </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Дата проведения испытаний:</p>
        </div>
        <div>
          <p>{getDateV1(state.testDate)}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Время проведения испытаний:</p>
        </div>
        <div>
          <p>{state.testTime}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Виды работ:</p>
        </div>
        <div>
          <p>{state.typeJob}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Объект строительства: </p>
        </div>
        <div>
          <p>{state.researchObjects.name}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Объект контроля:</p>
        </div>
        <div>
          <p>{state.objectControl}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Место отбора проб:</p>
        </div>
        <div>
          <p>{state.samplingLocation}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Проект: </p>
        </div>
        <div>
          <p>{state.name}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}>
        <div style={{ width: '300px' }}>
          <p>Краткая информацция</p>
        </div>
        <div>
          <p>{state.description}</p>
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

export default React.memo(PrintOrderDocument)
