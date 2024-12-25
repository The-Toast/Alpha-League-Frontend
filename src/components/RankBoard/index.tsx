'use client'

import Ticker from 'components/Ticker'
import {RightArrow} from 'assets'

import * as S from './style'

interface RankBoardProps {
  rank: number
  image: string
  name: string
  profit: string
  percent: string
  ticker: string[]
  profiting: boolean
}

export default function RankBoard(
  {rank, image, name, profit, percent, ticker, profiting}: RankBoardProps
) {
  return (
    <S.Content>
      <S.RankNum>
        {rank}
      </S.RankNum>
      <S.Container>
        <S.Wrapper>
          <S.Profile src={image} />
          <S.ProfileContent>
            <S.Head>
              <S.Name>{name}</S.Name>
              <S.Profit profiting={profiting}>{profit} <strong>({percent})</strong></S.Profit>
            </S.Head>
            <S.Ticker>
              {ticker.map((tickerItem, index) => (
                <Ticker key={index} children={tickerItem} />
              ))}
            </S.Ticker>
          </S.ProfileContent>
        </S.Wrapper>
        <S.Position>
          <S.BtnText>Position</S.BtnText>
          <RightArrow />
        </S.Position>
      </S.Container>
    </S.Content>
  )
}