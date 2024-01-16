import { Link, useParams } from "react-router-dom"

export default function SpecialOffer(props) {
    const { resTitle } = useParams()
    return (
        <div className="flex flex-col items-start gap-2.5 px-5 mt-8">
            <h1 className="text-black text-xl font-semibold">{props.header}</h1>
            {
                props.array.map((food)=>{
                    return(
                        <div className="flex items-center gap-5 popular-food w-full" key={food.id}>
                            <div className="w-204 h-119 overflow-hidden rounded-lg">
                                <Link to={`/home/all-restaurants/${resTitle}/${food.title}`} className="block w-full h-full">
                                    <img src={food.image} alt={food.title} className="w-full h-full object-cover object-center"/>
                                </Link>
                            </div>
                            <div className="flex flex-col items-start h-fit gap-5">
                                <div>
                                    <h1 className="text-black text-base font-semibold">{food.title}</h1>
                                    <p className="text-86 text-sm">{food.descr}</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-86 text-sm">{food.type}</p>
                                    <span className="text-sm font-semibold text-txt-red">Kes {food.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
