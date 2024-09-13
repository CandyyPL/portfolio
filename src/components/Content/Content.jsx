import Style from './Content.styles.js'

const Content = ({ children }) => {
  return <Style.ContentWrapper className='content-wrapper'>{children}</Style.ContentWrapper>
}

export default Content
