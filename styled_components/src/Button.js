import styled, {css} from "styled-components"

const StyledButton = styled.button`
    padding: 6px 12px;
    border:1px solid lightgray;
    border-radius:8px;
    font-size:1rem;
    line-height:1.5;

    color:${(p)=> p.color || "gray"};
    background:${(p)=> p.background || "white"};

    ${(p) =>p.primary && css`
            color:white;
            background:navy;
            border-color:navy;
        `}
      p{color: red}    
`
const TransStyled = styled(StyledButton)`
    color:${(p)=>p.color || "orange"}

  
`

export default function Button({children, ...props }){ 
    return(
        <>
        <StyledButton {...props} >
            {children}
        </StyledButton>
        <TransStyled  {...props}>
            {children}
        </TransStyled>
        <StyledButton as="div" {...props} >
            {children}
        </StyledButton>
        </>
    )
}