import styled from 'styled-components'

export const EachItem = styled.li`
  margin-right: 5px;
`
export const CustomButton = styled.button`
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffffff')};
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  border: 1px solid #db1c48;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
`
