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
    <div id="toPrint" style={{ color: 'black', fontSize: '12px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div style={{ width: '200px' }}>
              <p>Контрагент:</p>
            </div>
            <div style={{ flex: 1 }}>
              <p>
                {state.user.company.legalForm} «{state.user.company.name}»
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div style={{ width: '200px' }}>
              <p>Завяку составил:</p>
            </div>
            <div style={{ flex: 1 }}>
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '200px' }}>
              <p>Телефон составителя:</p>
            </div>
            <div style={{ flex: 1 }}>
              <p>{state.user.phone}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '200px' }}>
              <p>Ответственный:</p>
            </div>
            <div style={{ flex: 1 }}>
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '200px' }}>
              <p>Телефон исполнителя:</p>
            </div>
            <div style={{ flex: 1 }}>
              <p>{state.responsibleUser.phone}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            alignItems: 'flex-end',
            flexDirection: 'column',
            rowGap: 5,
          }}
        >
          <p>Генеральному директору</p>
          <p>
            {' '}
            {state.responsibleUser.company.legalForm} «
            {state.responsibleUser.company.name}»
          </p>
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

      <div style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h4
          style={{
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: '900',
          }}
        >
          Заявка № {state.id} от {getDateV1(state.createdAt)}
        </h4>
      </div>
      <div style={{ marginBottom: '30px' }}>
        <p>Прошу провести испытания по ниже указанным параметрам: </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Дата проведения испытаний:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>{state.testDate ? getDateV1(state.testDate) : 'Не заполнено'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Время проведения испытаний:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>{state.testTime ? state.testTime : 'Не заполнено'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Виды работ:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>{state.typeJob ? state.typeJob : 'Не заполнено'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Объект строительства: </p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.researchObjects.name
              ? state.researchObjects.name
              : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Объект контроля:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>{state.objectControl ? state.objectControl : 'Не заполнено'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Место отбора проб:</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            {state.samplingLocation ? state.samplingLocation : 'Не заполнено'}
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Проект: </p>
        </div>
        <div style={{ flex: 1 }}>
          <p>{state.name ? state.name : 'Не заполнено'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '300px' }}>
          <p>Краткая информация</p>
        </div>
        <div style={{ flex: 1 }}>
          <p>{state.description ? state.description : 'Не заполнено'}</p>
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
