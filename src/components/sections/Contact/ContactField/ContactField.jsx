import Style from './ContactField.styles.js'

const ContactField = (props) => {
  const { fieldName, fieldType, labelName, size } = props

  return (
    <Style.ContactFieldWrapper>
      <Style.Label htmlFor={fieldName}>{labelName}</Style.Label>
      {size == 'big' ? (
        <Style.TextareaField id={fieldName} maxLength={145} rows={5} cols={60} />
      ) : (
        <Style.InputField id={fieldName} type={fieldType} />
      )}
    </Style.ContactFieldWrapper>
  )
}

export default ContactField
