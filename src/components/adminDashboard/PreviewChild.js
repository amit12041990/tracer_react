import React from 'react'

function PreviewChild() {
  return (
    <>
     <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addChildModal">Child Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="">
              <div className="modal-body">
                <div className="child-details-wrap">
                    <div className="row">
                        <div className="col-12">
                            <p>Name:  <span>Amit Kumar Shah	</span></p>
                            <p>Age:  <span>14</span></p>
                            <p>Gender:  <span>Male</span></p>
                            <p>ID:  <span>b565fcf8-4587-48d5-871B-458930</span></p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default PreviewChild