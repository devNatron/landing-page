import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

type Props = {
  pricingBox: PricingBoxProps
}
const PricingBox = ({pricingBox}: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{pricingBox.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{pricingBox.numberInstallments}x de</span> R${pricingBox.priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem dangerouslySetInnerHTML={{__html: pricingBox.benefits}} />
    </S.BenefitsList>
    <Button
      href={pricingBox.button.url}
      onClick={onClick}
      withPrice
    >
      <p>{pricingBox.button.label}</p>
      <div>
        <S.ButtonFullPrice>R$549</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$399</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
