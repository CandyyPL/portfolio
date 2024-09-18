import React, { useState } from 'react'
import Style from './ContactField.styles.js'

const ContactField = React.forwardRef((props, ref) => {
  const { fieldName, fieldType, labelName, size, reg } = props

  const [contentLength, setContentLength] = useState(0)

  return (
    <Style.ContactFieldWrapper>
      <Style.Label htmlFor={fieldName}>
        {labelName} {size == 'big' && `(${contentLength}/400)`}
      </Style.Label>
      {size == 'big' ? (
        <Style.TextareaField
          id={fieldName}
          maxLength={400}
          rows={5}
          cols={60}
          required
          {...reg(fieldName)}
          onChange={(e) => setContentLength(e.target.value.length)}
          ref={ref}
        />
      ) : (
        <Style.InputField id={fieldName} type={fieldType} required {...reg(fieldName)} />
      )}
    </Style.ContactFieldWrapper>
  )
})

export default ContactField
