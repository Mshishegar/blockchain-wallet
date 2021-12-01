import React from 'react'
import styled from 'styled-components'

import { Button, Text } from 'blockchain-info-components'

const StyledButton = styled(Button)`
  background-image: radial-gradient(ellipse at bottom right, #21cae0 0%, #595fee 80%);
  color: white;
  width: 88px;
  min-width: 88px;
  height: 32px;
  padding-right: 0;
  padding-left: 0;
  border: none;
  border-radius: 4px;
`
const FabIcon = (
  <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 10C16 14.4183 12.4183 18 8 18C3.58172 18 0 14.4183 0 10C0 5.58172 3.58172 2 8 2C12.4183 2 16 5.58172 16 10ZM6.52172 8.99655C6.78384 8.99655 6.99633 8.78406 6.99633 8.52194V5.97463C6.99633 5.71251 7.20882 5.50002 7.47094 5.50002H8.52867C8.79079 5.50002 9.00328 5.71251 9.00328 5.97463V8.52194C9.00328 8.78406 9.21577 8.99655 9.47789 8.99655H12.0252C12.2873 8.99655 12.4998 9.20904 12.4998 9.47116V10.5289C12.4998 10.791 12.2873 11.0035 12.0252 11.0035H9.47789C9.21577 11.0035 9.00328 11.216 9.00328 11.4781V14.0254C9.00328 14.2875 8.79079 14.5 8.52867 14.5H7.47094C7.20882 14.5 6.99633 14.2875 6.99633 14.0254V11.4781C6.99633 11.216 6.78384 11.0035 6.52172 11.0035H3.97441C3.71229 11.0035 3.49981 10.791 3.49981 10.5289V9.47116C3.49981 9.20904 3.7123 8.99655 3.97441 8.99655H6.52172Z'
      fill='white'
    />
  </svg>
)

const FabButton = () => {
  return (
    <StyledButton data-e2e='fabButton'>
      {FabIcon}
      <Text weight={600} size='14px' color='white' style={{ paddingLeft: '5px' }}>
        Trade
      </Text>
    </StyledButton>
  )
}

type Props = {}

export default FabButton
