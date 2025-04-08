import {E} from "@/components/E"

export const D = (props) => {
    return (
        <div>
            <E gene={props.gene} color={props.color} sizing={props.sizing} weight={props.weight} />
        </div>
    );
};