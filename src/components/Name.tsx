import { NameDiv, NameHeader, NameH1 } from "@/styles"

const Name = (): JSX.Element => {
    return (
        <NameHeader>
          <h1>console<span className="text-white">.<span style={{ color:'rgb(75 136 237)' }}>log</span></span>("</h1>
          <NameDiv>
            <NameH1>Hey, My name is Tony!</NameH1>
          </NameDiv>
          <h1 className="closure">");</h1>
        </NameHeader>
    )
}

export default Name;