import styled from '@emotion/styled'

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;
`

export const RankNum = styled.p`
  width: 1.25rem;
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const Wrapper = styled.div`
  display: flex;
  width: 21.875rem;
  padding: 1rem;
  align-items: center;
  gap: 1.25rem;
  border-radius: 0.75rem;

  &:hover {
    background-color: #F5F5F5;
  }
`

export const Profile = styled.img`
  // Layout
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;

  // Style
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

export const Name = styled.p`
  letter-spacing: -0.025rem;
`

export const Profit = styled.p<{profiting: boolean}>`
  color: ${({ profiting }) => (profiting ? '#5555FF' : '#f00')};
  letter-spacing: -0.02031rem;
  -webkit-user-select:text;
  -moz-user-select:text;
  -ms-user-select:text;
  user-select:text;
  cursor: auto;
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Ticker = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const Position = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
`

export const BtnText = styled.p`
  letter-spacing: -0.025rem;
`