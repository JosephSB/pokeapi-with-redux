import SkeletonCardPokemon from "../cards/CardPokemon/skeleton"

interface props {
    long: number
}

const LoaderCards = ({long}:props) => {
    const cardsSkeleton = []
    for (let i = 0; i < long; i++) {
        cardsSkeleton.push(<SkeletonCardPokemon key={"sk-"+i} />)
    }
    return (
        <>
            {cardsSkeleton}
        </>
    );
}

export default LoaderCards