'use client'

import {keyframes} from "@emotion/react";

const Spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

interface User {
  rank: number;
  profile_image_url: string;
  name: string;
  profit_krw: string;
  profit_rate: string;
  stocks_purchased: string[]
  na_rock: boolean;
}

import React, { useEffect, useState } from 'react';
import {Calendar} from 'assets'
import RankBoard from 'components/RankBoard'

export default function Landing() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API에서 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      const res = await fetch('https://test.makerin.kr/api/data');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };

    fetchData().then(r => {
      console.log(r)
    })
  }, []);

  if (loading) return <Loading><Spinner /></Loading>

  if (!users || users.length === 0) {
    return (
      <Container>
        <Title>
          <h1>Alpha League</h1>
        </Title>
        <p>No user data available.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        <h1>Alpha League</h1>
        <Period>
          <IconWrap>
            <Calendar/>
            <h4>Period</h4>
          </IconWrap>
          <p>2024. 12. 17 ~ 2026. 01. 01</p>
        </Period>
      </Title>
      <RankWrap>
        <h2>Rank</h2>
        <RankContent>
          {users
            .sort((a, b) => a.rank - b.rank)
            .map((user) => (
              <RankBoard
                key={user.name}
                rank={user.rank}
                image={user.profile_image_url}
                name={user.name}
                profit={user.profit_krw}
                percent={user.profit_rate}
                ticker={user.stocks_purchased}
                profiting={user.na_rock}
              />
            ))}
        </RankContent>
      </RankWrap>
    </Container>
  )
}

import styled from '@emotion/styled'

const Container = styled.div`
  // Layout
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 6.25rem 11.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  // Style
  background: #FFF;
`

const Title = styled.div`
  display: flex;
  width: 18.3125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`

const RankWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`

const RankContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.725rem;
`

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it covers everything */
  flex-direction: column;
`

const Spinner = styled.div`
  border: 4px solid transparent;
  border-top: 4px solid #4CAABE; /* Spinner color */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${Spin} 1s linear infinite;
`