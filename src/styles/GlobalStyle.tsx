'use client'

import {Global, css} from '@emotion/react'

const Style = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  body,
  * {
    font-family:
        Pretendard,
        -apple-system,
        system-ui,
        sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  * {
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor: default;
  }
  
  h1 {
    color: #111;
    
    /* EN/Headline 1/SemiBold */
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.25rem; /* 130% */
  }
  
  h2 {
    color: #111;

    /* EN/Title 1/Regular */
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem; /* 131.25% */
  }
  
  h4 {
    color: #111;

    /* EN/Title 4/Regular */
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 140% */
  }
  
  p {
    color: #111;
    
    /* EN/Body 1/Regular */
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }
  
  strong {
    font-weight: 500;
    -webkit-user-select:text;
    -moz-user-select:text;
    -ms-user-select:text;
    user-select:text;
    cursor: auto;
  }
`

export function GlobalStyle() {
  return <Global styles={Style} />
}