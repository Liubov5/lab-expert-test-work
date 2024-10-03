import printJS from 'print-js'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getDateV1 } from '../../helper/getDate'

const PrintCommentsDocument = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [close, setClose] = useState(false)
  console.log(state)

  useEffect(() => {
    printJS({
      printable: 'toCommentPrint',
      type: 'html',
      targetStyles: ['*'],
      onPrintDialogClose: () => setClose(true),
    })
  }, [])

  useEffect(() => {
    navigate(`/orders/${state.orderId}?view=true`)
  }, [close])

  return (
    <div id="toCommentPrint" style={{ color: 'black', fontSize: '12px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h4
          style={{
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: '900',
          }}
        >
          Комментарии к заявке № {state.orderId}
        </h4>
      </div>
      {state.comments.map((comment: any) => {
        return (
          <div
            key={comment.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '15px',
            }}
          >
            <div style={{ width: '300px' }}>
              <p>
                {' '}
                {comment.user.surname +
                  ' ' +
                  comment.user.name[0] +
                  '. ' +
                  comment.user.lastName[0] +
                  '.'}{' '}
              </p>
              <p style={{ color: 'gray', fontSize: '11px' }}>
                {getDateV1(comment.createdAt)}
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p>{comment.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PrintCommentsDocument
