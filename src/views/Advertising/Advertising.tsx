import React from 'react'
import styled from 'styled-components'
import { Card, BaseLayout } from 'components/_uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PlainCard from './components/PlainCard'

const CTACardsItemsImage = styled(Card)`
max-width: 294px
margin-left: auto;
margin-right: auto;
width: 100%;
min-height: 142px;
position: relative;
`
const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-top: 48px;
  margin-bottom: 24px;
  column-gap: 22px;
  row-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Advertising: React.FC = () => {
  const { t } = useTranslation()
  const adsZoneIds = [4,4,4, 4,4,4, 4,4]
  return (
    <Page>
      <div>
        <CTACards>
          {adsZoneIds.map((adsZoneId, index) => {
            const _key = `key_${index.toString()}`
            return (
                <CTACardsItemsImage key={_key}>
                  <ins data-revive-zoneid={adsZoneId} data-revive-id="334e2814b61d4020ee29a24975d46ada"/>
                </CTACardsItemsImage>
            )
          })}
          <div>
            <PlainCard text={t('Advertise your projects here')} redirect="/advertising" invert/>
          </div>
        </CTACards>
      </div>
    </Page>
  )
}

export default Advertising
