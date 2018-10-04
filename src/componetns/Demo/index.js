import React from 'react'

const Demo = ({ title, url }) => (
  <iframe style={{border: '1px solid #ededed'}} title={title} width="100%" height="300" src={url + "/embedded/result,html,css/"} allowFullScreen allowpaymentrequest="true" frameBorder="0"></iframe>
)

export default Demo