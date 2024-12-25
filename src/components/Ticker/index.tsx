'use client'

import {ReactNode} from 'react'

import * as S from './style'

interface TickerProps {
  children: ReactNode
}

export default function Ticker(
  {children}: TickerProps
) {
  return (
    <S.Wrapper>
      <S.Ticker>
        {children}
      </S.Ticker>
    </S.Wrapper>
  )
}