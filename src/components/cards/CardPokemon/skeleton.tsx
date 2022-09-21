import { StyledCard,StyledCardBodySkeleton,StyledCardFooterSkeleton } from "./styles"



const SkeletonCardPokemon = () => {
    return(
        <StyledCard>
            <StyledCardBodySkeleton/>
            <StyledCardFooterSkeleton>
                <p>  </p>
            </StyledCardFooterSkeleton>
        </StyledCard>
    )
}

export default SkeletonCardPokemon