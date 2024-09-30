import {EachItem, CustomButton} from './styledComponents'

const ButtonItem = props => {
  const {item, isActive, changeActiveButton} = props
  const {id, imageUrl, buttonText, imageAltText} = item

  const onClickingButton = () => {
    changeActiveButton(id)
  }

  return (
    <EachItem>
      <CustomButton
        type="button"
        isActive={isActive}
        onClick={onClickingButton}
      >
        {buttonText}
      </CustomButton>
    </EachItem>
  )
}

export default ButtonItem
