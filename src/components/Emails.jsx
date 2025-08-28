import React from 'react'
import Email from './Email'

function Emails(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email  key={index} index={index} email={email} toggleStar={props.toggleStar} toggleRead={props.toggleRead}/>
        ))}
      </ul>
    </main>
  )
}

export default Emails

