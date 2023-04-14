import styled from 'styled-components';

export const BlobSection = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -999;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`

export const BlobDiv = styled.div`
    position: absolute;
    filter: blur(5px);
    width: 200px;
    height: 20vh;
    left: 0;
    top: 0;
    transform: scale(2.5);
    transform-style: preserve-3d;

    @media (max-width: 600px) {
        transform: scale(2);
        transition: transform 0.5s ease-in-out;

    }

`
export const BlobG1 = styled.stop`
    stop-color: rgb(76, 161, 175);
`

export const BlobG2 = styled.stop`
    stop-color: rgb(196, 224, 229)
`

export const NameHeader = styled.div`
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    font-size: 5vmin;
    font-family: JetBrains Mono, monospace;
    border-right: 0.15em solid white; 
    animation: 
    typing 7s steps(37) 1s 1 normal both,
    blinkTextCursor 500ms steps(37) infinite normal;

@keyframes typing {
  from { text-indent: 0; width: 0; }
  to { text-indent: 0; width: 22.5em; }
}

@keyframes blinkTextCursor{
  from { border-right-color: rgba(255,255,255,.75); }
  to { border-right-color: transparent; }
}
`

export const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Name = styled.h1`
    position: relative;
    color: #84d562;
`