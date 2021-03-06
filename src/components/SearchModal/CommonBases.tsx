import React from 'react'
import { ChainId, Currency, currencyEquals, ETHER, Token } from 'utils/@sdk'
import { Text } from 'components/_uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

import { SUGGESTED_BASES } from '../../config/constants'
import { AutoColumn } from '../Layout/Column'
import QuestionHelper from '../QuestionHelper'
import { AutoRow } from '../Layout/Row'
import { CurrencyLogo } from '../Logo'

const BaseWrapper = styled.div<{ disable?: boolean }>`
  border: 1px solid ${({ theme, disable }) => (disable ? 'transparent' : theme.colors.background)};
  border-radius: 10px;
  display: flex;
  padding: 6px;

  align-items: center;
  :hover {
    cursor: ${({ disable }) => !disable && 'pointer'};
    background-color: ${({ theme, disable }) => !disable && theme.colors.highlight};
  }

  background-color: ${({ theme, disable }) => disable && theme.colors.dropdown};
  div{
    color: ${({ theme, disable }) => disable && theme.colors.contrast};
  }
  opacity: ${({ disable }) => disable && '0.4'};
`
const MainWrapper =  styled.div`
  margin-top :  12px;
`
export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency,
}: {
  chainId?: ChainId
  selectedCurrency?: Currency | null
  onSelect: (currency: Currency) => void
}) {
  const { t } = useTranslation()
  return (
    <MainWrapper>
      <AutoColumn gap="sm">
        <AutoRow>
          <Text fontSize="14px" color="background">{t('Common bases')}</Text>
          <QuestionHelper text={t('These tokens are commonly paired with other tokens.')} ml="4px" />
        </AutoRow>
        <AutoRow gap="auto">
          <BaseWrapper
            onClick={() => {
              if (!selectedCurrency || !currencyEquals(selectedCurrency, ETHER)) {
                onSelect(ETHER)
              }
            }}
            disable={selectedCurrency === ETHER}
          >
            <CurrencyLogo currency={ETHER} style={{ marginRight: 8 }} />
            <Text color="background" fontSize="12px">BNB</Text>
          </BaseWrapper>
          {(chainId ? SUGGESTED_BASES[chainId] : []).map((token: Token) => {
            const selected = selectedCurrency instanceof Token && selectedCurrency.address === token.address
            return (
              <BaseWrapper onClick={() => !selected && onSelect(token)} disable={selected} key={token.address}>
                <CurrencyLogo currency={token} style={{ marginRight: 8 }} />
                <Text color="background" fontSize="12px">{token.symbol}</Text>
              </BaseWrapper>
            )
          })}
        </AutoRow>
      </AutoColumn>
    </MainWrapper>
  )
}
