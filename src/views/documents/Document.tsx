/* eslint-disable jsx-a11y/alt-text */
import {
  CCard,
  CCardBody,
  CContainer,
  CLink,
  CPopover,
  CRow,
  CSmartTable,
  CSpinner,
  CButton,
  CModalFooter,
  CCardHeader,
  CCol,
} from '@coreui/react-pro'
import React, { createRef, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import DocumentsApi from './Documents.Api'
import { useParams } from 'react-router-dom'
import Modal from '../../components/Modal'
import Offcanvas from '../../components/Offcanvas'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleLeft } from '@coreui/icons'
import { useTypedSelector } from '../../store'
import { Viewer, Worker, RenderPageProps } from '@react-pdf-viewer/core'
import { printOrDownloadDoc } from '../../utils'
import printJS from 'print-js'
import { PDFDownloadLink } from '@react-pdf/renderer'

const CustomPageLayer: React.FC<{
  renderPageProps: RenderPageProps
}> = ({ renderPageProps }) => {
  React.useEffect(() => {
    // Mark the page rendered completely when the canvas layer is rendered completely
    // So the next page will be rendered
    if (renderPageProps.canvasLayerRendered) {
      renderPageProps.markRendered(renderPageProps.pageIndex)
    }
  }, [renderPageProps.canvasLayerRendered])

  return (
    <>
      {renderPageProps.canvasLayer.children}
      {renderPageProps.annotationLayer.children}
    </>
  )
}

const renderPdfPage = (props: RenderPageProps) => (
  <CustomPageLayer renderPageProps={props} />
)

const Document = (): JSX.Element => {
  const navigate = useNavigate()
  const [downloadFileName, setDownloadFileName] = useState('')
  const [listDocuments, setListDocuments] = useState<any[]>([])
  const [visible, setVisible] = useState(true)
  const [showPicture, setShowPicture] = useState<any>({})
  const [downloadDocument, setDownloadDocument] = useState('')
  const [downloadDocumentMimeType, setDownloadDocumentMimeType] = useState('')
  const [titleName, setTitleName] = useState('')
  const [dataFormat, setDataFormat] = useState('')

  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const docName = searchParams.get('name')

  const getDocumentsShow = (id: any) => {
    DocumentsApi.getImageById(id).then((result: any) => {
      console.log(result)
      setShowPicture(result.data)
    })
  }

  useEffect(() => {
    getDocumentsShow(id)
  }, [id])

  const handlePrintClick = () => {
    console.log('lol')
    printJS({
      printable: 'toPrint',
      type: 'html',
      targetStyles: ['*'],
    })
  }

  return (
    <CContainer>
      <CCard>
        <CCardHeader className="px-4">
          <div>{docName}</div>
        </CCardHeader>
        <CCardBody>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p className="fs-1">{titleName}</p>
          </div>

          <div
            className="mt-2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {showPicture?.file?.url ? (
              <>
                {showPicture?.file?.url.includes('.pdf') ? (
                  <div
                    id="toPrint"
                    className="pdf-viewer"
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.3)',
                      // height: '490px',
                      width: '100%',
                    }}
                  >
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={showPicture?.file?.url}
                        renderPage={renderPdfPage}
                        withCredentials={true}
                      />
                    </Worker>
                  </div>
                ) : (
                  <div>
                    <img
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                      }}
                      src={showPicture?.file?.url}
                    />
                  </div>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
          {/* Actions Buttons block*/}
          <CCol className="d-flex justify-content-end mt-5">
            <CButton
              className="ms-4"
              size="lg"
              variant="outline"
              onClick={() => handlePrintClick()}
            >
              Печать
            </CButton>
            <CButton className="ms-4" size="lg" variant="outline">
              <a
                style={{ textDecoration: 'none' }}
                download
                href={showPicture?.file?.url}
              >
                Скачать
              </a>
            </CButton>
          </CCol>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default Document
