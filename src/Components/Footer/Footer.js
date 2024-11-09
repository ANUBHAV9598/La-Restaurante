import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  z-index: 90999;
  width: 100%;
  background: var(--contactBg);
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    a {
      background: #3D3C38;
      width: 60px;
      height: 60px;
      text-align: center;
      font-size: 32px;
      line-height: 60px;
      color: var(--white);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      display: inline-block;
      transition: all 0.5s ease;
      margin: 0px 5px;

      &:hover {
        background: var(--gold);
      }

      i {
        font-size: 2.5rem;
      }
    }

    p {
      color: var(--white);
      font-family: "Cabin", sans-serif;
      font-weight: 400;
      font-size: 2rem;
      margin-top: 40px;
      text-align: center;
    }

    @keyframes Heart {
      0% {
        transform: scale(1);
        color: red;
      }
      50% {
        transform: scale(1.3);
        color: red;
      }
      100% {
        transform: scale(1);
        color: red;
      }
    }

    .Heart {
      animation: Heart 1.5s infinite ease-in-out;
      color: red;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <nav>
        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" ><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.pinterest.com/" rel="noopener noreferrer" target="_blank" ><i className="fab fa-pinterest"></i></a>
        <a href="https://plus.google.com/discover" rel="noopener noreferrer" target="_blank" ><i className="fab fa-google-plus-g"></i></a>
        <p>Made with <i className="fas fa-heart Heart"></i> by <span className="gold">Anubhav Pandya</span></p>
      </nav>
    </FooterWrapper>
  );
}

export default Footer;
